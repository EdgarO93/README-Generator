// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
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
    choices: ["MIT", "test", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter you GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: " Please enter you email",
  },
  {
    type: "input",
    name: "thanks",
    message: " Please enter your acknowledgment message",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
  let newReadMe = `./SampleReadMe/${fileName}`;
  fs.writeFile(newReadMe, data, (err) =>
    err ? console.log(err) : console.log("Success! You have a new README in the NewReadMe folder.")
  );
}

// TODO: Create a function to initialize app
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
  // .catch((error)=>{
  //     if(error.isTtyError){
  //         console.log('error')
  //     } else{
  //         //something else went wrong
  //     }
  // });
}

// Function call to initialize app
init();
