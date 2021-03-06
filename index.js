// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Hello, what is your name?",
  },

  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "install",
    message: "What is your project installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project usage information?",
  },

  {
    type: "input",
    name: "contribute",
    message: "What is your project contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "What is your project test instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license",
    choices: ["MIT", "Apache-2.0", "GPL-3.0", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter you GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: " Please enter you email:",
  },
  {
    type: "input",
    name: "thanks",
    message: " Please enter your acknowledgment message:",
  },
];

// TODO: Create a function to write README file
//unlink function to delete the previous README
function writeToFile(fileName, data) {
  let newReadMe = `./NewReadMe/${fileName}`
  fs.unlink(newReadMe, (err) => {

    if (err) {
      console.log("No README to overwrite, will make new one!");
    }


    fs.writeFile(newReadMe, data, (err) =>
      err ? console.log(err) : console.log("Success! You have a new README in the NewReadMe folder.")
    );
  })

}

// A function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers.name);
    // console.log(answers.title);
    // console.log(answers.description);
    // console.log(answers.install);
    // console.log(answers.usage);
    // console.log(answers.contribute);
    // console.log(answers.test);
    // console.log(answers.license);
    // console.log(answers.github);
    // console.log(answers.email);
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
