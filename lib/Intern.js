const Employee = require ('./Employee')

class Intern extends Employee {
    constructor (name, internID, email, school){
        super(name, internID, email);
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
    } 
}

module.exports = Intern;