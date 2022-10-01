function randNumber (digits){
    let  multiplier  = Math.pow(10,digits);
    return Math.floor(Math.random() * multiplier);
}

function getEmpHours(attendanceCheck){
    switch(attendanceCheck) {
        case IS_Present :
            return HR_FullTime;
        case IS_HalfTime :
            return HR_PartTime;
        default :
            return 0;
    }
}

const IS_Present = 2;
const IS_HalfTime = 1;

const HR_PartTime = 4;
const HR_FullTime = 8;

const WAGE_PerHour = 20;

let attendanceCheck = randNumber(1) % 3;
let attendanceStatus = '';
let empHours = 0;
let empDailyWage = 0;

if(attendanceCheck == IS_Present)
    attendanceStatus = 'Present';

else if(attendanceCheck == IS_HalfTime)
    attendanceStatus = 'Half Time';
else
    attendanceStatus = 'Absent';

console.log('Employee is :',attendanceStatus);

empHours = getEmpHours(attendanceCheck);
empDailyWage = WAGE_PerHour * empHours;

console.log("Today's Wage : $",empDailyWage );