// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const fs = require('fs');
const generate = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        message: "What is the title your project?",
        type: "input",

    },
    {
        name: "Installation",
        message: "What are the steps required to install your project?",
        type: "input",

    },
    {
        name: "Installation",
        message: "Give a brief Description of your project",
        type: "input",

    },
    {
        name: "Installation",
        message: "What are the steps required to install your project?",
        type: "input",

    },
    {
        name: "Usage",
        message: "Provide examples for use and add instructions if necessary",
        type: "input",

    },
    {
        name: "Credits",
        message: "List any collaborators along with links to their GitHub pages",
        type: "input",

    },
    {
        name: "License",
        message: "What type of license are you choosing?",
        type: "input",

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
