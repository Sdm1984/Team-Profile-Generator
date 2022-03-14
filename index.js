//Packages used for my app
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./team-template.js");

//Import team role files
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const team = []

//Employee Questions
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
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Are you a Manager, Engineer or Intern?",
    name: "Manager", "Engineer": "Intern",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
  },
  {
    type: "input",
    message: "Please enter your GitHub username if you have one.",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your school's name.",
    name: "school",
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
      const teamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      team.push(teamMember)
      const response = generateTeam(team);
      writeToFile("index.html", response);
    });
}

// const teamMemberTwo = new Engineer(answers.name, answers.id,answers.email,answers.github)
// team.push (teamMemberTwo)
// const teamMemberThree = new Intern(answers.name, answers.id,answers.email,answers.school)
// team.push (teamMemberThree)

// Function to initialize app
init();