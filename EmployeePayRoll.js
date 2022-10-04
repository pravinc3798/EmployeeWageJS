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
        this._name = value;
    }
}

let employee = new EmployeePayRollData(01,'Pravin',50000);
console.log(employee);

employee.name = 'Mosh';
console.log(employee);

let newemployee = new EmployeePayRollData(02,'Terrisa',45000,'F',new Date().toDateString());
console.log(newemployee);