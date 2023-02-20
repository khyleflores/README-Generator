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
