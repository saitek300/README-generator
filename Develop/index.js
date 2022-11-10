// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'how would you describe you application?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how would you install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how do you use this application?.'
    },
    {
        type: 'list',
        name: 'contribution',
        message: 'what are the contribution guidelines?',
    },
    {
        type: 'type',
        name: 'test',
        message: 'do you have any test examples written? provide them here: ',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
