/* FUNCTION */

// Level 1
// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(fname, lname) {
    return fname + " " + lname;
}

console.log("fullName(): " + fullName('Bharati', 'Subramanian'));

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNums(a=1, b=2) {
    return a+b;
}
console.log("addNums(): " +addNums(4,5));

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
console.log("Area of a Circle: " + function(r) {
    return Math.PI*r*r;
}(2));

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(c) {
    return c * (9/5) + 32;
}
console.log('Celcius to Farenheit: ' + convertCelciusToFahrenheit(33) + "F");

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function BMI(height, weight) {
    const bmiValue = weight / (height * height);

    if(bmiValue < 18.5) {
        return "Underweight";
    }
    if(bmiValue >= 18.5 && bmi < 25) {
        return "Normal Weight";
    }
    if(bmiValue >= 25 && bmi < 30) {
        return "Overweight";
    }
    return "Obese";
}
console.log(BMI(45, 1.49));

// 7. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch(month) {
        case "December":
        case "January":
        case "February":
            return "Winter";
        case "October":
        case "November":
            return "Autumn"
        case "March":
        case "April":
        case "May":
            return "Summer";
        case "June":
        case "July":
        case "August":
        case "September":
            return "Rainy";
        default: return "Invalid Month!"
    }
}
console.log(checkSeason("September"));


// Level 2
// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a=0, b=0, c=0) {
    const rootOf = b**2- (4*a*c);
    const root = Math.round(Math.sqrt(rootOf));
    const denom = 2*a;
    const numer1 = -1*b + root;
    const numer2 = -1*b - root;

    return [numer1/denom , numer2/denom];
}

console.log(solveQuadEquation())

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr = [1,2,3,4,5,6,7]) {
    arr.forEach(a => {
        console.log(a);
    })
}
printArray(["Apple", "Mango", "Strawberry", "Pineapple"])

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDate() {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

console.log(showDate());

// 4. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a=1, b=2) {
    let temp = b;
    b = a;
    a = temp;
    return [a,b];
}

console.log(swapValues(10,20))

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array = [1,2,3,4,5,6]) {
    array.reverse();
}
let arr =  ["Apple", "mango", "Strawberry", "Pineapple", "Litchi"];
reverseArray(arr)
console.log(arr);

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
arr.forEach((a,index) => {
    arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
})
console.log(arr);


// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(array, item) {
    array.push(item);
}

addItem(arr, "Banana");
console.log(arr);

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, item) {
    let found = false;
    arr.forEach((a,i) => {
        if(a === item) {
            arr.splice(i,1);
            found = true;
        }
    });
    return found? "Element removed" :"No Element Found";
}

console.log(removeItem(arr, "Kiwi"));
console.log(arr);

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(n) {
    let mid = Math.trunc(n/2);
    if(n%2 === 0) {
        return `${n/2} odd and even numbers`;
    }
    return `${parseInt(n/2)+1} odd numbers and ${parseInt(n/2)} even numbers}`;
}

console.log(evensAndOdds(100));

// 10. Write a function which takes any number of arguments and return the sum of the arguments
function sumArgs() {
    let sum = 0;
    for(let i = 0; i<arguments.length; i++) {
        sum += !Number.isNaN(Number(arguments[i])) ? arguments[i] : 0;
    }
    return sum;
}

console.log(sumArgs(1,2));

// 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
let ids = [];
function userIdGenerator(numChars = 7) {
    let id = "";
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz";


    function generateRandomId() {
        for(let i = 0; i<numChars; i++) {
            const randomNum = Math.floor(Math.random() * alphabets.length);
            id+=alphabets[randomNum];
        }
        return id;
    }
    do {
        id = generateRandomId();
    }
    while(ids.includes(id))

    return id;
}

ids.push(userIdGenerator());
console.log(ids);

// Level 3
// 1. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/*
function userIdGeneratedByUser() {
    const numChars = Number(prompt('Enter number of characters in the id'));
    let numIds = Number(prompt('Enter number of IDS'));

    let userIds = [];
    while(numIds-- > 0) {
        userIds.push(userIdGenerator(numChars));
    }

    ids.push(userIds);
}

userIdGeneratedByUser();10
console.log("IDS\n" + ids);
*/

// 3. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(colorType='hexa', numColors=1) {
    if(colorType.includes('hexa')) {
        return generateHexaColors(numColors);
    }
    return generateRgbColors(numColors);
}

function generateHexaColors(numColors) {
    let hexaColors = [];
    while(numColors -- > 0) {
        const hexaValues = "ABCDEF123456789";
        let hexaColor = "";

        function generateHexaColor() {
            for(let i = 0; i<6; i++) {
                let randomNum = Math.floor(Math.random()* hexaValues.length);
                hexaColor+=hexaValues[randomNum];
            }
            return hexaColor;
        }
        
        do {
            hexaColor = "";
            hexaColor = generateHexaColor();
        } while(hexaColors.includes(hexaColor));

        hexaColors.push(hexaColor);
    }

    return hexaColors;
}

function generateRgbColors(numColors) {
    let rgbColors = [];
    while(numColors -- > 0) {
        let rgbColor = "(";

        function generateRgbColor() {
            for(let i = 0; i<3; i++) {
                let randomNum = Math.floor(Math.random() * 256);
                rgbColor+= rgbColor.split(",").length!==3 ?  randomNum+"," : randomNum;
            }
            return rgbColor;
        }
        
        do {
            rgbColor = "(";
            rgbColor = generateRgbColor() + ")";
        } while(rgbColors.includes(rgbColor));

        rgbColors.push(rgbColor);
    }

    return rgbColors;
}

let colors= [];
colors.push(generateColors('rgb', 2));

console.log("Colors\n" + colors);

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.
function shuffleArray(array) {
    let currIndex = array.length;
    while(currIndex-- !=0) {
        const randIndex = Math.floor(Math.random() * currIndex);
        currIndex--;
        [array[currIndex], array[randIndex]] = [array[randIndex], array[currIndex]]
    }
}

const shuffArr = [1,2,3,4,5,6,7,8,9,10]

shuffleArray(shuffArr)
console.log(shuffArr);


// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number.
function factorial(n) {
    let fact = 1;

    while(n!=0) {
        fact = fact*n;
        n--;
    }
    return fact;
}
let factN = 0;
console.log(`The factorial of ${factN} is: ${factorial(factN)}`);


// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty() {
    if(arguments.length === 0) return true;
    return false;
}

console.log(isEmpty() ? "No Arguments" : "Arguments are there");
console.log(isEmpty(1,2,3) ? "No Arguments" : "Arguments are there");

// 6. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function getAverage(array) {

    if(!array || array.length === 0) {
        return "Empty Array!";
    }
    let avg = 0;
    for(let a of array) {
        if(Number.isNaN(Number(a))) {
            return "Invalid Array. All elements should be of Number type"
        }
        else {
            avg+=a;
        }
    }
    return avg/array.length;
}

console.log(getAverage([1,2,3,4,5]))
console.log(getAverage());
console.log(getAverage([]));
console.log(getAverage([1,2,3,4,"Mango",5,6,7,]))