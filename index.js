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
      choices: ['Apache License 2.0', 'GNU Affero General Public License v3.0', 'MIT', 'BSD 2-clause "Simplified"', 'BSD 3-clause "New" or "Revised" license',
              'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0',
              'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
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
    console.log('Hello');
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
