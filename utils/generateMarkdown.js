// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-important)

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
   This application is under the ${data.license} license. Click on this [link](https://opensource.org/licenses/${data.license} "${data.license} License") to know what the license is covered under.
  
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
