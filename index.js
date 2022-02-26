const inquirer = require('inquirer');
const fs = require('fs')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Employee = require ('./lib/Employee')
// const renderHTML = require("./src/htmltemplate")
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'sample.html');

const render = require('./src/htmltemplate');
const teamArray = [];


function startApp() {
function addManager(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: 'What is your manager\'s name?',
      validate:(res) => {
        if (res !== '') {
          return true;
        }
        return 'Enter a valid name.';
      },
    },
    {
      type: "input",
      name: "managerID",
      message: 'What is your manager\'s id?',
      validate:(res) => {
        const pass = res.match(/^[1-9]\d*$/)
        if (res !== '') {
          return true;
        }
        return 'Enter a valid ID (Number greater than 0).';
      },
    },
    {
      type: "input",
      name: "email",
      message: 'What is your manager\'s email?',
      validate:(res) => {
        const pass = res.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter valid email';
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: 'What is your manager\'s office number?',
      validate:(res) => {
        const pass = res.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Enter a valid Office Number (Number greater than 0).';
      },
    }
  ])
  .then(res=> {
    console.log(res);
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
      validate:(res) => {
        if (res !== '') {
          return true;
        }
        return 'Enter a valid name.';
      },
    },
    {
      type: "input",
      name: "engineerID",
      message: 'What is your engineer\'s id?',
      validate:(res) => {
        const pass = res.match(/^[1-9]\d*$/)
        if (res !== '') {
          return true;
        }
        return 'Enter a valid ID (Number greater than 0).';
      },
    },
    {
      type: "input",
      name: "email",
      message: 'What is your engineer\'s email?',
      validate:(res) => {
        const pass = res.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter valid email';
      },
    },
    {
      type: "input",
      name: "gitHub",
      message: 'What is your engineer\'s GitHub username?',
      validate:(res) => {
        if (res !== '') {
          return true;
        }
        return 'Please enter valid username.';
      },
    }
  ])
  .then(res=> {
    const {name, id, email, gitHub} = res
    const engineer = new Engineer (name, id, email, gitHub)
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
      name: "internID",
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
  addManager();
}

startApp();
