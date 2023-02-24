
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project",
    },
    {
      type: "list",
      name: "license",
      message: "Which license would you like to use for your project? (use up/down arrow to select)",
      choices: ["MIT", "GPL", "Apache", "BSD"],
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions for your project",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage instructions for your project",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please provide contribution guidelines for your project",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide test instructions for your project",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((answers) => {
    const {
      title,
      description,
      license,
      installation,
      usage,
      contribution,
      tests,
      username,
      email,
    } = answers;
  
    const licenseBadge = `![${license} License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    
    const licenseNotice = `This project is licensed under the ${license} license.`;
  
    const readme = `
  # ${title}
  
  ${licenseBadge}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${licenseNotice}
  
  ## Contributing
  
  ${contribution}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  If you have any questions about this project, please contact ${username} at ${email}.

  ##Link 
  
  https://www.youtube.com/watch?v=TObhOKDW1Fg
  `;
  
    fs.writeFile("README.md", readme, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README file created successfully");
      }
    });
  });
  
  
  
  
  
  

