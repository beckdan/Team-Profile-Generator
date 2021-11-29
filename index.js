const inquirer = require('inquirer');
const fs = require('fs')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')

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
    console.log(res)
    const {name, id, email, officeNumber} = res
    const manager = new Manager (name, id, email, officeNumber)
  teamArray.push(manager)
  crossRoads();
  })
}

function addEngineer(){

}

function addIntern(){

}

function crossRoads(){

}

function createTeam(){

}

addManager();