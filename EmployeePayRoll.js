class EmployeePayRollData{
//    constructor (...params){
//        this.id = params[0],
//        this.name = params[1],
//        this.salary = params[2],
//        this.gender = params[3],
//        this.startDate = params[4]
//    }

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

    get id(){
        return this._id;
    }

    set id(value){
        if(value > 0)
            this._id = value;
        else
            throw 'Invalid ID';
    }

    get salary(){
        return this._salary;
    }

    set salary(value){
        if(value > 0)
            this._salary = value;
        else
            throw 'Invalid Salary';
    }

    get startDate(){
        return this._startDate;
    }

    set startDate(value){
        if (value < new Date())
            this ._startDate = value;
        else
            throw 'Invalid Date';
    }

    get gender(){
        return this._gender;
    }

    set gender(value){
        if (value == 'F' || value =='M')
            this._gender = value;
        else
            throw 'Invalid Gender';
    }
}

let employee = new EmployeePayRollData();
let newemployee = new EmployeePayRollData();

try {
    employee.name = "Pravin";
    employee.id = 0;
    employee.salary = 10000;
    employee.startDate = new Date()-7;
    employee.gender = 'F';
    console.log(employee);
} 
catch (e) {
    console.error(e);    
}

try {
    employee.name = "Acde";
    employee.id = 02;
    employee.salary = 10000;
    employee.startDate = new Date()+7;
    employee.gender = 'F';
    console.lognew(employee);
} 
catch (e) {
    console.error(e);    
}

