function randNumber (digits){
    let  multiplier  = Math.pow(10,digits);
    return Math.floor(Math.random() * multiplier);
}

const IS_Present = 2;
const IS_HalfTime = 1;
const IS_Absent = 0;

let attendanceCheck = randNumber(1) % 3;
let attendanceStatus = '';

if(attendanceCheck == IS_Present)
    attendanceStatus = 'Present';

else if(attendanceCheck == IS_HalfTime)
    attendanceStatus = 'Half Time';
else
    attendanceStatus = 'Absent';

console.log('Employee is :',attendanceStatus);
