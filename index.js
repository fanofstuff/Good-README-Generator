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
    }
  ]);
}

function queryGithub(data) {
  const queryURL = `https://api.github.com/users/${data.username}`;
  axios.get(queryURL).then(function(result) {
    console.log(result.data.avatar_url);
  });
}

promptUser()
  .then(function(data) {
    queryGithub(data);
    // generateREADME(data);
  })
  .then(() => console.log("Successfully wrote to README.md"))
  .catch(err => console.log(err));

// const questions = [];

// function writeToFile(fileName, data) {}

// function init() {}

// init();
