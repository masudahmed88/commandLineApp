// TODO: Include packages needed for this application
const fs = require('fs'); 
const path = require('path'); 
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');  
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
inquirer 
.prompt([
    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What type of license are you using?',
        choices: ['afl','apache','artistic','bsl','bsd-2','bsd-3-clause','bsd-3-clause-clear','cc','cc0','cc-4.0','cc-sa-4.0','wtfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib'] 
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Provide a table of contents.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Describe how to use your application.'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Provide any available tests'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Do you have any questions?'
    },
])
.then ((answers) => {
    const readMeContent = generateReadMe(answers);

       }
];

//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
    return `# ${data.title}`

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt

}

// Function call to initialize app
init();
