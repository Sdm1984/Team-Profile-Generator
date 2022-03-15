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
    message: "What is the employee's role?",
    name: "role",
    choice: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber",
    when: (answers) => answers.role === "Manager",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "github",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: "input",
    message: "What school is the intern attending?",
    name: "school",
    when: (answers) => answers.role === "Intern",
  },
];

const addPrompt = () =>
inquirer.prompt([
  {
    type: "confirm",
    name: "add",
    message: "Would you like to add another employee to the team?",
  },
]);

function init() {
  questions().then((data) => {
    switch (data.role) {
      case "Manager":
        let newManager = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        team.push(newManager);
        break;
      case "Engineer":
        let newEngineer = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
        team.push(newEngineer);
        break;
      case "Intern":
        let newIntern = new Intern(data.name, data.id, data.email, data.school);
        team.push(newIntern);
        break;
    }
    console.log("Employee data saved!");
    addPrompt().then((data) => {
      if (data.add) {
        init();
     // } else {

// Create a function to write to html
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Create a function to initialize app with Manager info
function init() {
  // prompt method calls in array of questions
  inquirer
    .prompt(questions)
    // promise, answers function takes answer responses and writes to readme
    .then((answers) => {

      if (answers.role === "Manager") {

        const teamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(teamMember)

      } else if (answers.role === "Engineer") {

        const teamMemberTwo = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(teamMemberTwo)

      } else if (answers.role === "Intern") {

        const teamMemberThree = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(teamMemberThree)

        
        const response = generateTeam(team);
        writeToFile("index.html", response);
      }

    });
}

// Function to initialize app
init();
