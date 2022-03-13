const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

const questions = [
  {
    type: "input",
    message: "Please enter your full name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your employee ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your work email address?",
    name: "email",
  },
];

// Create a function to write to html
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Create a function to initialize app
function init() {
  // prompt method calls in array of questions
  inquirer
    .prompt(questions)
    // promise, answers function takes answer responses and writes to readme
    .then((answers) => {
      console.log(answers);
      const response = pageTemplate(answers);
      writeToFile("index.html", response);
    });
}

// Function to initialize app
init();