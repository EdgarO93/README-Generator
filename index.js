// TODO: Include packages needed for this application
var inquirer = require ('inquirer');
// TODO: Create an array of questions for user input
const questions = [{
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
     "message": "enter you github"
 
 },
 {
    "type": "input",
     "name":"email",
     "message": "enter you email"
 
 },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   inquirer
    .prompt(questions)
    .then((answers) =>{
        console.log(answers.title)
        console.log(answers.description)
        console.log(answers.install)
        console.log(answers.usage)
        console.log(answers.contribute)
        console.log(answers.test)
        console.log(answers.license)
        console.log(answers.github)
        console.log(answers.email)

    })
    .catch((error)=>{
        if(error.isTtyError){
            console.log('error')
        } else{
            //something else went wrong
        }
    });
}

// Function call to initialize app
init();
