// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        "type": "input",
         "name":"name",
         "message": "Hello, what is your name?"
     
     },

    {
   "type": "input",
    "name":"title",
    "message": "what is your title?"

},
{
    "type": "input",
     "name":"description",
     "message": "what is your description?"
 
 },
 {
    "type": "input",
     "name":"install",
     "message": "what is your installation instructions?"
 
 },
 {
    "type": "input",
     "name":"usage",
     "message": "what is your usage information?"
 
 },

 {
    "type": "input",
     "name":"contribute",
     "message": "what is your contribution guidelines?"
 
 },
 {
    "type": "input",
     "name":"test",
     "message": "what is your test instructions"
 
 },
 {
    "type": "list",
     "name":"license",
     "message": "select a license",
     "choices":["MIT", "test","none"],
 
 },
 {
    "type": "input",
     "name":"github",
     "message": "enter you github username"
 
 },
 {
    "type": "input",
     "name":"email",
     "message": "enter you email"
 
 },



];



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!')
    );
  }

// TODO: Create a function to initialize app
function init() {
   inquirer
    .prompt(questions)
    .then((answers) =>{
        console.log(answers.name)
        console.log(answers.title)
        console.log(answers.description)
        console.log(answers.install)
        console.log(answers.usage)
        console.log(answers.contribute)
        console.log(answers.test)
        console.log(answers.license)
        console.log(answers.github)
        console.log(answers.email)
       writeToFile("README.md", generateMarkdown(answers));


    })
    // .catch((error)=>{
    //     if(error.isTtyError){
    //         console.log('error')
    //     } else{
    //         //something else went wrong
    //     }
    // });
};

// Function call to initialize app
init();
