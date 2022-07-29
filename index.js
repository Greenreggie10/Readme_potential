// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =  [
{
    type: 'input',
    name: 'name',
    message: 'what is your the name of your project?',
},
{
    type: 'input',
    name: 'Descriptions',
    message: '?',
},
{
    type: 'input',
    name: 'Installation',
    message: 'what is your the name of your project?',
},
{
    type: 'input',
    name: 'Usages',
    message: 'what is your the name of your project?',
},
{
    type: 'lists',
    name: 'Licenses',
    message: 'what is your ',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', ]
},
{
    type: 'input',
    name: 'Contributing',
    message: 'what is your the name of your project?',
},
{
    type: 'input',
    name: 'Tests',
    message: 'what is your the name of your project?',
},


]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        writeToFile('README.md',generateMarkdown({ ...inquirerResponses}))
    })
 //writing file im using spread operator
}

// Function call to initialize app
init();

