const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

runPrompt();

async function runPrompt() {
  try {
    const {
      username,
      title,
      functionality,
      motivation,
      problem,
      learning,
      unique,
      installation,
      usage,
      credits,
      license,
      assist,
      test,
      question1,
      answer1,
      question2,
      answer2,
      question3,
      answer3
    } = await inquirer.prompt([
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
        message:
          "Please include your license in the following format: [license name](link to license)",
        name: "license",
        default: "[MIT](https://choosealicense.com/licenses/mit/)"
      },
      {
        type: "input",
        message:
          "How can someone help contribute to your project? Be explicit regarding what protocals should be followed when pulling and pushing code.",
        name: "assist",
        // credit to: https://www.makeareadme.com/ for default text
        default:
          "Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.\nPlease make sure to update tests as appropriate."
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
        name: "question1",
        default: "Where can I report a bug or error that I find?"
      },
      {
        type: "input",
        message: "Your response?",
        name: "answer1"
      },
      {
        type: "input",
        message: "What is your second most commonly asked question?",
        name: "question2",
        default:
          "What additional features or improvements do you currently have planned?"
      },
      {
        type: "input",
        message: "Your response?",
        name: "answer2"
      },
      {
        type: "input",
        message: "What is your third most commonly asked question?",
        name: "question3",
        default: "How can I help?"
      },
      {
        type: "input",
        message: "Your response?",
        name: "answer3"
      }
    ]);

    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );

    console.log(data.avatar_url);

    const readME = await
`
# ${title}

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

### What is this project supposed to do?
      
${functionality}

### Why am I doing this?
      
${motivation}

### Why does this matter? 
      
${problem}

### Here's what I've learned: 
      
${learning}

### So, how is this project special? 

${unique}

## Table of Contents
      
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [FAQs](#faqs)
      
## Installation
      
${installation}
      
## Usage
     
${usage}
      
## Credits
      
${credits}
      
## Relevant Badges
      
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
            
## Contributing
      
To contribute to this project (${title}): 
${assist}
      
## Test
      
The following should contain a test to display the functionality of the code. Please run the following before attempting to merge any code.

    ${test}

## FAQs

1. ${question1}
      
   ${answer1}
      
2. ${question2}
      
   ${answer2}
      
3. ${question3}
      
   ${answer3}
      
## License
      
This project (${title}) uses the following license(s): ${license}
      
---
      
Copyright © 2020, ${username}
    
![user's Github avatar image](${data.avatar_url})

`;

    return writeFileAsync("./assets/README.md", readME);
  } catch (err) {
    console.log(err);
  }
}
