// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}
  
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing 
  ${data.contribution}

  ## Tests 
  ${data.testInstructions}

  ## Questions 
  To view my Github profile, click on this [link](https://github.com/${data.githubUsername} "https://github.com/${data.githubUsername}")

  If you require any further information, feel free to contact me at ${data.emailAddress}.

`;
}

module.exports = generateMarkdown;
