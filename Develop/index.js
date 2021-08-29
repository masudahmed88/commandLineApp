// TODO: Include packages needed for this application
const fs = require('fs'); 
//const path = require('path'); 
const inquirer = require ('inquirer');
//const renderLicenseLink = require('./utils/generateMarkdown'); 
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const renderLicenseBadge = license => {
    if (license !== "None") return `[![License: ${license}]]www.github.com/license/${license}`;
    else return "";
  }

const generateMarkDown = (data , renderBadge) => `# ${data.title} \n
    ${renderBadge} \n
    ## Description \n ${data.description} \n
    ## Table of Contents \n ${data.tableOfContents} \n
        *Installation 
        *Usage
        *Usage
        *License
        *Contributing
        *Tests
        *Questions 
    ## Installation \n ${data.installation}\n  
    ## Usage \n ${data.usage}\n
    ## License \n ${data.license}\n
    ## Contributing \n ${data.contributing}\n
    ## Tests \n ${data.tests}\n
    ## Questions  \n ${data.questions}\n ${data.questons2}`;

inquirer 
.prompt([
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['afl','apache','artistic','bsl','bsd-2','bsd-3-clause','bsd-3-clause-clear','cc','cc0','cc-4.0','cc-sa-4.0','wtfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib'] 
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Provide a table of contents.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List your collaborators, if any.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'What is your email address?'
    },
])
.then((answers) => {
    const renderBadge = renderLicenseBadge(answers.license);
    const readMeContent = generateMarkDown(answers, renderBadge);

    fs.writeFileSync('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md')
    );
    return renderBadge;
});


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt
    .then
}

// Function call to initialize app
init();

