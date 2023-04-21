// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license:',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'No License'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
  

// TODO: Create a function to write README file
const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
// Function call to initialize app
const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}
