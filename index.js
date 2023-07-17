// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const makeFile = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the name of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'what is this project about?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'how to run this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'how to use this application?',
        name: 'usage information',
    },
    {
        type: 'input',
        message: 'how to contribute to this project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'how to run tests in application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
    },


];
//rendor a licence badge in a Read Me(google)
inquirer
.prompt(questions)
.then(function(response){
    fs.writeFile('ReadMe.md', makeFile(response), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
 
console.log(makeFile(response))
})

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
