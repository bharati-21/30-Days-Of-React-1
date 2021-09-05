//Get user input using prompt/ If user is 18 or older, give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = 15;
// age = Integer.parseInt(prompt("Enter your age:"));
if(age >= 18) {
    console.log('You are old enough to drive');
}
else {
    console.log(`You are not old enough to drive. Wait for another ${18-age} years to drive`);
}

const authorAge = 25;
// age = parseInt(prompt('Enter your age'));

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
if(age > authorAge) {
    console.log(`You are ${age - authorAge} years older than the author`);
}
else {
    console.log(`Your are ${authorAge - age} years younger than the author`);
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4;
let b = 3;
console.log(a > b ? `${a} is greater than ${b}` : (b>a) ? `${b} is greater than ${a}` : `${a} is equal to ${b}`);


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = 5;
// num = parseInt(prompt('Enter a number'));
if(num % 2 === 0) {
    console.log(`${num} is even`);
}
else {
    console.log(`${num} is odd`);
}

// Level 2




