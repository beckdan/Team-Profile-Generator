const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (name, engineerID, email, gitHub){
        super(name, engineerID, email);
        this.gitHub = gitHub
    }
    getGitHub(){
        return this.gitHub
    }
    getRole(){
        return 'Engineer'
    } 
}

module.exports = Engineer;