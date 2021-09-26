/* ================ EXERCISES ARRAYS ================ */
const app = document.getElementById('app');

// Level 1
  
// 1. Declare an empty array
let emptyArr = [];

// 2. Declare an array with more than 5 number of elements
let numArr = [15, 41, 10, 5, 65, 80];

// 3. Find the length of your array
let numArrLen = numArr.length;
app.innerHTML = "Array Length: " + numArrLen + "<br/><br/>";

// 4. Get the first item, the middle item and the last item of the array
app.innerHTML +=
  "First Element: " +
  numArr[0] +
  ", Last Element: " +
  numArr[numArrLen - 1] +
  ", Middle Element: " +
  numArr[Number.parseInt(numArrLen / 2) - 1] +
  "<br/><br/>";

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedArr = ["Mango", 12, 50.45, false, [1, 2, 3], "null"];
app.innerHTML += "Mixed Type Array: " + mixedArr + "<br /><br />";


// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
  ];
  

// 7. Print the array using console.log()
console.log(itCompanies);
  
    
// 8. Print the number of companies in the array
let itLen = itCompanies.length;
app.innerHTML += `Number of IT Companies: ${itLen} <br/><br/>`;

// 9. Print the first company, middle and last company
app.innerHTML += `First comapny: ${itCompanies[0]}, Middle Company: ${
    itCompanies[parseInt(itLen / 2) - 1]
  }, Last Coampany: ${itCompanies[itLen - 1]}<br/><br/>`;
    
// 10. Print out each company
itCompanies.forEach((company) => {
    app.innerHTML += company + "<br/>";
});
app.innerHTML += "<br/>";
  
// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itLen; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
}
app.innerHTML += "Companies in upper case: " + itCompanies + "<br/><br/>";
  
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
app.innerHTML += itCompanies.join(" ") + "<br/><br/>";
  
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
app.innerHTML +=
  "Is Netflix in the array? " + itCompanies.includes("Netflix") + "<br/><br/>";


// 14. Filter out companies which have more than one 'o' without the filter method
app.innerHTML +=
  itCompanies.filter((company) => {
    return company.split("O").length > 2;
  }) + "<br/><br/>";

// 15. Sort the array using sort() method
app.innerHTML += "Sorted Array: " + itCompanies.sort() + "<br/><br/>";

// 16. Reverse the array using reverse() method
app.innerHTML += "Reversed array: " + itCompanies.reverse() + "<br/><br/>";

// 17. Slice out the first 3 companies from the 
app.innerHTML +=
  "Slice first 3 companies: " + itCompanies.slice(0, 3) + "<br/><br/>";

// 18. Slice out the last 3 companies from the array
app.innerHTML +=
  "Slice first 3 companies: " + itCompanies.slice(-3) + "<br/><br/>";

// 19. Slice out the middle IT company or companies from the array
app.innerHTML +=
  "Slick middle IT company " + (itLen % 2) === 0
    ? itCompanies.slice(parseInt(itLen / 2) - 1, parseInt(itLen / 2) + 1)
    : itCompanies.slice(parseInt((itLen - 1) / 2), parseInt(itLen / 2) + 1) +
      "<br/><Br/>";

// itCompanies.push("NETFLIX");
// itLen++;

// 20. Remove the first IT company from the array
app.innerHTML += itCompanies.shift() + "<br/><br/>";

// 21. Remove the middle IT company or companies from the array
itLen = itCompanies.length;
app.innerHTML +=
  itCompanies.splice(parseInt((itLen - 1) / 2), 1) + "<br/><br/>";

// 22. Remove the last IT company from the array
app.innerHTML += itCompanies.splice(-1, 1) + "<br/><br/>";

// 23. Remove all IT companies
app.innerHTML += itCompanies.splice(0, itCompanies.length);



// Level 1
// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file


const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]


// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(" ");

words.forEach((word, i) => {
    words[i] = words[i].replaceAll(/[,.']/g, '');
})

console.log(words);
console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes('Ethiopia')) console.log('ETHIOPIA');
else countries.push('Ethiopia');

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')) console.log('Sass is a CSS preprocessor');
else webTechs.push('Sass'); console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

// Level 3

// 1. The following is an array of 10 students ages: js - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(`Min age: ${ages[0]}, Max Age: ${ages[ages.length-1]}`);

const agesLen = ages.length;
const mid = Math.trunc(agesLen/2);
if(agesLen%2 === 0) {
    console.log(`Middle elements: ${ages[mid-1]} ${ages[mid]}`)
}
else {
    console.log(`Middle elements: ${ages[mid]}`)
}

// 2. Slice the first ten countries from the countries array
console.log(countries.slice(0,10));

// 3. Find the middle country(ies) in the countries array
const countriesLen = countries.length;
console.log(countriesLen);
const cMid = Math.trunc(countries.length / 2);
if(countriesLen % 2 == 0) {
    console.log(`Middle elements: ${countries[cMid-1]} ${countries[cMid]}`)
}
else {
    console.log(`Middle element: ${countries[cMid-1]}`)
}

// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if(countriesLen % 2 == 0) {
    const leftCountries = countries.slice(0, cMid);
    const rightCountries = countries.slice(cMid, countriesLen);
    console.log(leftCountries.length, rightCountries.length);
}
else {
    const leftCountries = countries.slice(0, cMid+1);
    const rightCountries = countries.slice(cMid+1, countriesLen);
    console.log(`Middle element: ${countries[cMid-1]}`)
    console.log(leftCountries.length, rightCountries.length);
}