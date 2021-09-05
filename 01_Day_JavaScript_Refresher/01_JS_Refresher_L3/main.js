// import { countries } from "../01_JS_Refresher_L1/countries";

// The following is an array of 10 students ages: 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const agesLen = ages.length;

// Sort the array and find the min and max age 
ages.sort();
console.log("Min and Max Age:", ages[0], ages[agesLen-1]);


// Find the median age(one middle item or two middle items divided by two) 
agesLen %2 == 0 ? console.log("Median Age:", ages[parseInt(agesLen/2)-1], ages[parseInt(agesLen/2)]) : console.log(ages[parseInt(agesLen/2)]);

// Find the average age(all items divided by number of items)
const sum = ages.reduce((sum, age) => {
    return sum+=age;
});
const avg = sum / agesLen;

// Find the range of the ages(max minus min) 
console.log(`Range of ages: ${ages[agesLen-1] - ages[0]}`);


// Compare the value of (min - average) and (max - average), use abs() method
console.log(ages[0] - avg, ages[agesLen-1] - avg);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];
  
const countryLen = countries.length;
console.log(countryLen);

// Slice the first ten countries from the countries array
console.log(countries.slice(0,10))


// Find the middle country(ies) in the countries array
countryLen % 2 == 0 ? console.log(countries[parseInt(countryLen/2)-1], countries[parseInt(countryLen/2)]) : console.log(countries[parseInt(countryLen/2)]);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const countryHalf = parseInt((countryLen-1) / 2);
console.log(countryHalf);
const leftCountries = countries.slice(0, countryHalf+1)
const rightCountries = countries.slice(countryHalf+1, countryLen);

console.log(leftCountries, rightCountries);