const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");


const writeToFile = util.promisify(fs.writeFile);

// Prompt questions to users using Inquirer npm
const promptUser = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license.',
      choices: ['Apache--2.0', 'LGPL--3.0', 'MIT', 'BSL', 'EPL--2.0', 'AGPL--v3',
              'GPL--2.0', 'MPL--2.0', 'Unlicense'],
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contribution guidelines.',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Please enter test instructions.',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Please enter your github username.',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Please enter your email address.',
    },
]);



// function to initialize program
const init = async () => {
    console.log('Hello, welcome to the README Generator.');
    try {
      const answers = await promptUser();
      
      //Call the function from utils folder in generateMarkdown.js
      const readme = generateMarkdown(answers);
  
      await writeToFile('README.md', readme);
  
      console.log('Successfully created a README file');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
