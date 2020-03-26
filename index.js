const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

// return writeFileAsync("example.txt", result.data.avatar_url);

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username?",
      name: "username"
    },
    {
      type: "input",
      message: "Project title?",
      name: "title"
    },
    {
      type: "input",
      message: "What does your project do?",
      name: "functionality"
    },
    {
      type: "input",
      message: "Why did you decide to create your project?",
      name: "motivation"
    },
    {
      type: "input",
      message: "What problem does your project solve?",
      name: "problem"
    },
    {
      type: "input",
      message: "What did you learn from creating this project?",
      name: "learning"
    },
    {
      type: "input",
      message: "What makes your project unique?",
      name: "unique"
    },
    {
      type: "input",
      message: "How do you install your project?",
      name: "installation"
    },
    {
      type: "input",
      message: "How do you use your project?",
      name: "usage"
    },
    {
      type: "input",
      message:
        "Who all worked on your project? What resources do you need to reference? Please include github links with names of contributers.",
      name: "credits"
    },
    {
      type: "input",
      message: "Link to license(s) used: ",
      name: "license"
    },
    {
      type: "input",
      message: "How can someone help contribute to your project?",
      name: "assist"
    },
    {
      type: "confirm",
      message:
        "Do you want to include the Contributer Covenant Code of Conduct?",
      name: "covenant"
    },
    {
      type: "input",
      message:
        "Please provide a simple test to showcase your project's functionality.",
      name: "test"
    },
    {
      type: "input",
      message: "What is your most commonly asked question?",
      name: "question1"
    },
    {
      type: "input",
      message: "Your response?",
      name: "answer1"
    },
    {
      type: "input",
      message: "What is your second most commonly asked question?",
      name: "question2"
    },
    {
      type: "input",
      message: "Your response?",
      name: "answer2"
    },
    {
      type: "input",
      message: "What is your third most commonly asked question?",
      name: "question3"
    },
    {
      type: "input",
      message: "Your response?",
      name: "answer3"
    }
  ]);
}

function queryGithub(data) {
  const queryURL = `https://api.github.com/users/${data.username}`;
  axios.get(queryURL).then(function(result) {
    console.log(result.data.avatar_url);
  });
}

function generateREADME(data) {
  return `# ${data.title}

  ## Description
  
  ${data.functionality}
  
  ${data.motivation}
  
  ${data.problem}
  
  ${data.learning}
  
  ${data.unique}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [FAQs](#faqs)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Contributing
  
  To contribute to ${data.title}: 
  ${data.assist}.
  
  ## Test
  
  The following should contain a test to display the functionality of the code. Please run the following before attempting to merge any code.
  ${data.test}
  
  ## FAQs
  
  1. ${data.question1}
  
      ${data.answer1}
  
  2. ${data.question2}
  
      ${data.answer2}
  
  3. ${data.question3}
  
      ${data.answer3}
  
  ## License
  
  ${data.title} uses the following license(s): ${data.license}.
  
  ---
  
  Copyright © 2020, ${data.username}.
  `;
}

promptUser()
  .then(function(data) {
      console.log(data);
      queryGithub(data);
      const readME = generateREADME(data);
      return writeFileAsync("./assets/README.md", readME);
    })
  .catch(err => console.log(err));

// const questions = [];

// function writeToFile(fileName, data) {}

// function init() {}

// init();
