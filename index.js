const inquirer = require('inquirer');
const fs = require('fs')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const renderHTML = require("./src/htmltemplate")

const teamArray = []

function addManager(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: 'What is your manager\'s name?',
    },
    {
      type: "input",
      name: "id",
      message: 'What is your manager\'s id?',
    },
    {
      type: "input",
      name: "email",
      message: 'What is your manager\'s email?',
    },
    {
      type: "input",
      name: "officeNumber",
      message: 'What is your manager\'s office number?',
    }
  ])
  .then(res=> {
    const {name, id, email, officeNumber} = res
    const manager = new Manager (name, id, email, officeNumber)
  teamArray.push(manager)
  crossRoads();
  })
}

function addEngineer(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: 'What is your engineer\'s name?',
    },
    {
      type: "input",
      name: "id",
      message: 'What is your engineer\'s id?',
    },
    {
      type: "input",
      name: "email",
      message: 'What is your engineer\'s email?',
    },
    {
      type: "input",
      name: "github",
      message: 'What is your engineer\'s github username?',
    }
  ])
  .then(res=> {
    const {name, id, email, github} = res
    const engineer = new Engineer (name, id, email, github)
  teamArray.push(engineer)
  crossRoads();
  })
}

function addIntern(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: 'What is your intern\'s name?',
    },
    {
      type: "input",
      name: "id",
      message: 'What is your intern\'s id?',
    },
    {
      type: "input",
      name: "email",
      message: 'What is your intern\'s email?',
    },
    {
      type: "input",
      name: "github",
      message: 'What is your intern\'s school?',
    }
  ])
  .then(res=> {
    const {name, id, email, school} = res
    const intern = new Intern (name, id, email, school)
  teamArray.push(intern)
  crossRoads();
  })
}

function crossRoads(){
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What type of member would you like to add to your team?",
      choices: [
        "Engineer",
        "Intern",
        "All done"
      ]
    }
  ])
  .then(res=> {
    switch(res.choice) {
      case "Engineer":
        return addEngineer();
      case "Intern":
        return addIntern();
      default:
        return createTeam();    
      }
  })
}

// function writeToFile(fileName, data) {
//   return fs.writeFileSync(fileName, data)
// }
  
// function createTeam(){
//   .then(res => {
//     const renderHTML = renderHTML(res)
//     writeToFile('index.html', renderHTML)
//   })
// }

addManager();
