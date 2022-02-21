const inquirer = require('inquirer');
const fs = require('fs')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const renderHTML = require("./src/htmltemplate")
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'sample.html');

const render = require('./src/htmltemplate.js');

const IdArray = [];
const teamArray = [];

console.log('\nTime to generate your team!')

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
      message: "What type of team member would you like to add to your team?",
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

function createTeam() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(teamArray), 'utf-8');
  }
  createManager();

addManager();
