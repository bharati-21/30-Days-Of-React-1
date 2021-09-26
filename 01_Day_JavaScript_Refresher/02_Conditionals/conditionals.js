/* ============ CONDITIONALS ============ */

// Level 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
const userAge = Number(prompt('Enter your age'));
if(userAge >= 18) {
    alert('You are old enough to drive');
}
else {
    alert(`You have to wait for ${18-userAge} years to drive`);
}
*/
// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/*
if(userAge > 25) {
    alert(`You are ${userAge-25} years older than Asabeneh`);
}
else if(userAge === 25) {
    alert(`You and Asabeneh are of same age!`);
}
else {
    alert(`You are ${25-userAge} years younger than Asabeneh`);
}
*/

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
    // using if else
    // ternary operator
const a = 4;
const b = 3;
if(a>b) {
    console.log('a > b: ', a + "  > " + b );
}
else if(b > a) console.log('b > a: ', b + "  > " + a);

console.log(`${a > b ? a : b}`);

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

if(a%2 === 0) {
    console.log(`${a} is an even number`);
}
else console.log(`${a} is an odd number`);

const marks = 67;
let grade = "A";
if(marks >= 80 && marks <=100) grade = "A";
else if(marks >=70 && marks <= 79) grade = "B";
else if(marks >= 60 && marks <= 69) grade = "C";
else if(marks >= 50 && marks <= 59) grade = "D";
else grade = "F";
console.log(`marks = ${marks} and grade = ${grade}`)


// heck if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer

let month = "February";
let season = "Autumn";
switch(month) {
    case "September":
    case "October":
    case "November": season = "Autumn"
                    break;
    case "December":
    case "January":
    case "February": season = "Winter"
                    break;
    case "March":
    case "April":
    case "May": season = "Spring";
                        break;
    case "June":
    case "July":
    case "August": season = "Summer";
        break;
    default:
        season = "Unknown month!";
        break;
}

console.log(`It's ${season} season in the month of ${month}`);

// const day = (prompt("What day is it today?")).toLowerCase();

// if(day === 'saturday' || day === 'sunday') {
//     alert("It's a weekend!");
// }
// else {
//     alert("It's a weekday!");
// }

// Write a program which tells the number of days in a month.
const months = {
    "January": 31, 
    "February": [28, 29], 
    "March": 31, 
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31, 
    "September": 30, 
    "October": 31, 
    "November": 30, 
    "December": 31
};
month = "September";
if(month === "February") {
    if(leapYear())
        console.log(`${month} has 29 days`);
    else 
        console.log(`${month} has 28 days`);
}
else {
    console.log(`${month} has ${months[month]} days`);
}

function leapYear() {
    const year = new Date().getFullYear();
    if((year % 4 === 0 && year % 100!==0) || year % 400 === 0 ){
        return true;
    }
    return false;
}