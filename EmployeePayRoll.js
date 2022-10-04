class EmployeePayRollData{
    constructor (id, name, salary){
        this.id = id,
        this.name = name,
        this.salary = salary
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