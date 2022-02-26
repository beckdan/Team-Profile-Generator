const Employee = require ('./Employee')

class Manager extends Employee {
    constructor (name, managerID, email, officeNumber){
        super(name, managerID, email);
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber 
    }
    getRole(){
        return 'Manager'
    } 
}

module.exports = Manager;