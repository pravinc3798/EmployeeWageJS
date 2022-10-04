class EmployeePayRollData{
    constructor (...params){
        this.id = params[0],
        this.name = params[1],
        this.salary = params[2],
        this.gender = params[3],
        this.startDate = params[4]
    }

    get name(){
        return this._name;
    }

    set name(value){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(value))
            this._name = value;
        else
            throw 'Name is not Valid';
    }
}

let employee = new EmployeePayRollData(01,'Pravin',50000);
console.log(employee);

employee.name = 'Mosh';
console.log(employee);

let newemployee = new EmployeePayRollData(02,'Terrisa',45000,'F',new Date().toDateString());
console.log(newemployee);

try {
    newemployee.name = "Pr";
    console.log(newemployee);
} 
catch (e) {
    console.error(e);    
}

try {
    employee.name = "Pravin";
    console.log(employee);
} 
catch (e) {
    console.error(e);    
}