// required modules

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

require("dotenv").config();

inquirer
.prompt([
    {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please add a description on your project'
    },
    {
        name: 'install',
        type: 'input',
        message: 'What command should be run to install dependencies?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What is the project being used for?'
    },
    {
        name: 'license',
        type: 'input',
        message: 'What kind of license does your project need?'
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        name: 'test',
        type: 'input',
        message: 'What command should be run to test the application?'
    },
    {
        name: 'question',
        type: 'input',
        message: 'Any questions? If not, press enter to generate README'
    }


])
.then(answers => {
    const url = `https://api.github.com/users/${answers.username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`; 

axios.get(url).then(response => {
    console.log(response.data);
    const text = 

`
![](https://img.shields.io/badge/node.js%20-brightgreen.svg)
![](https://img.shields.io/badge/javascript%20-blue.svg)
![](https://img.shields.io/badge/npm%20-red.svg)

# ${answers.title}

## Description

${answers.description}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Credits](#Credits)
* [Questions](#Questions)

## Installation

${answers.install}

## Usage

${answers.usage}

## License

${answers.license}

## Contributing

${answers.contribute}

## Tests

${answers.test}

## Credits

![](${response.data.avatar_url}&size=100)
${response.data.name}
Email: ${response.data.email}
[GitHub Profile](${response.data.html_url})

## Questions

${answers.question}
`
    fs.writeFile('Generated-ReadMe.md', text, () => {console.log('Done and Done');})
})
})
