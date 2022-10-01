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

const WORKING_Days = 20;
const WORKING_Hours = 100;

let attendanceCheck = randNumber(1) % 3;
let attendanceStatus = '';
let empHours = 0;
let empDailyWage = 0;
let empMonthlyWage = 0;
let daysWorked = 0;
let hoursWorked = 0;
let dailyWages = [];

while (daysWorked < WORKING_Days && hoursWorked < WORKING_Hours){
    
    empHours = getEmpHours(randNumber(1) % 3);
    empDailyWage = WAGE_PerHour * empHours;
    dailyWages.push(empDailyWage);
    empMonthlyWage += empDailyWage;

    daysWorked ++;
    hoursWorked += empHours;
}

console.log('Daily Wages :',dailyWages.toString());
console.log("Monthly Wage : $ %d --> (Days Worked : %d) (Hours Worked : %d)",empMonthlyWage, daysWorked, hoursWorked );

let accumulation = 0;
function customSum(item){
    accumulation += item;
    return accumulation;
}

dailyWages.forEach(customSum);
console.log('\nA1. Monthly Wage (array.foreach) -> $',accumulation);

function sumForReduction(sum,item){
    return sum += item;
}

empMonthlyWage = dailyWages.reduce(sumForReduction)
console.log('A2. Monthly Wage  (array.reduce) -> $',empMonthlyWage);

let counter = 0;
function mapDayToWage(item){
    counter++;
    return ' Day ' + counter + ' : ' + item;
}

let mappedDailyWages = dailyWages.map(mapDayToWage);
console.log('\nB. Map Day to Wage -> \n',mappedDailyWages.toString());

function filterFullDays(item){
    return item.includes("160");
}

let filteredArray = mappedDailyWages.filter(filterFullDays);
console.log('\nC. Days when wage is 160 -> \n',filteredArray.toString());

let firstFullDayWage = mappedDailyWages.find(filterFullDays);
console.log('\nD. First Day when wage is 160 -> \n',firstFullDayWage);

function checkForFullTime (item){
    return item.includes('160');
}

console.log('\nE. All elements of full time wage array has wage 160 ->',filteredArray.every(checkForFullTime));

function checkForHalfTime (item){
    return item.includes('80');
}

console.log('\nF. Does any elements of full time wage array has wage 80 ->',filteredArray.every(checkForHalfTime));

function countDaysWorked (days,item){
    if (item > 0)
        days = days + 1;
    return days;
}

console.log('\nG. Employee Working Days -> %d Days',dailyWages.reduce(countDaysWorked,0));