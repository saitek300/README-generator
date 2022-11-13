// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
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
        message: 'how do you use this application?',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'who would you like to credit?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license does this application have?',
        choices: ['MIT', 'nothing', 'still nothing'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'what are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'do you have any test examples written? provide them here: ',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        console.log(fileName)
        console.log(data)
        if (err){
            console.log("an error has occured")
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
        })

}

// Function call to initialize app
init();
