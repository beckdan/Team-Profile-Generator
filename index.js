const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the purpose of this application?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Are there any special nuances to use this application?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license is the application covered under?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command to run tests?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
      },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data)
	// If there is any error in writing to the file, return
 // Log this message if the file was written to successfully
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(res => {
        const readme = generateMarkdown(res)
        writeToFile('README.md', readme);
    })
}

// Function call to initialize app
init();