// TODO: Include packages needed for this application
const fs = require("fs");
const {writeFile} = fs.promises
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name the title of your project"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    
    {
        type: "input",
        name: "installation",
        message: "What installation method did you use?"
    },
    {
        type: "checkbox",
        name: "usage",
        message: "What languages are used in this project",
        choices: ["HTML", "CSS", "JavaScript"],
    },
    {
        type: "list",
        name: "license",
        message: "What License works on this project",
        choices: ["Apache", "Boost", "BSD"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How should people contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How will you test this project?"
    },

    {
        type: "input",
        name: "questions",
        message: "What questions do you have?",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your github username.",
    },
        
];



// TODO: Create a function to write README file
function writeToFile(fileName, data,) {
    return writeFile(path.join(process.cwd(), fileName,), data);
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((responses) => {
        
        writeToFile("./README.md", generateMarkdown({ ...responses }))
        .then(() => {
            console.log("Professional README");
        }) 
    });

}


// Function call to initialize app
init();