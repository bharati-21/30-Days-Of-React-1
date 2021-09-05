// import { countries } from "./countries";
// import { webTechs } from "./web_techs"; 

// console.log(countries);
// console.log(webTechs);

// Exercise Level One
const app = document.getElementById("app");

//   Declare an empty array;
let emptyArr = [];

//   Declare an array with more than 5 number of elements
let numArr = [15, 41, 10, 5, 65, 80];

//   Find the length of your array
let numArrLen = numArr.length;
app.innerHTML = "Array Length: " + numArrLen + "<br/><br/>";


// Get the first item, the middle item and the last item of the array
app.innerHTML +=  "First Element: " +  numArr[0] +  ", Last Element: " +  numArr[numArrLen - 1] +  ", Middle Element: " +  numArr[Number.parseInt(numArrLen / 2)] +  "<br/><br/>";

//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedArr = ["Mango", 12, 50.45, false, [1, 2, 3], "null"];
app.innerHTML += "Mixed Type Array: " + mixedArr + "<br /><br />";

//   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [  "Facebook",  "Google",  "Microsoft",  "Apple",  "IBM",  "Oracle",  "Amazon"];

//   Print the array using console.log()
console.log(itCompanies);

//   Print the number of companies in the array
let itLen = itCompanies.length;
app.innerHTML += `Number of IT Companies: ${itLen} <br/><br/>`;

//   Print the first company, middle and last company
app.innerHTML += `First comapny: ${itCompanies[0]}, Middle Company: ${  itCompanies[parseInt(itLen / 2) - 1]}, Last Coampany: ${itCompanies[itLen - 1]}<br/><br/>`;

//   Print out each company
itCompanies.forEach((company) => {  
    app.innerHTML += company + "<br/>";
});
app.innerHTML += "<br/>";

//   Change each company name to uppercase one by one and print them out
for (let i = 0; i < itLen; i++) {  
    itCompanies[i] = itCompanies[i].toUpperCase();
}
app.innerHTML += "Companies in upper case: " + itCompanies + "<br/><br/>";

//   Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
app.innerHTML += itCompanies.join(" ") + "<br/><br/>";

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
app.innerHTML +=  "Is Netflix in the array? " + itCompanies.includes("Netflix") + "<br/><br/>";

//   Filter out companies which have more than one 'o' without the filter method
app.innerHTML +=  itCompanies.filter((company) => {         return company.split("O").length > 2;  
}) + "<br/><br/>";

//   Sort the array using sort() method
app.innerHTML += "Sorted Array: " + itCompanies.sort() + "<br/><br/>";

//   Reverse the array using reverse() method
app.innerHTML += "Reversed array: " + itCompanies.reverse() + "<br/><br/>";

//   Slice out the first 3 companies from the array
app.innerHTML +=  "Slice first 3 companies: " + itCompanies.slice(0, 3) + "<br/><br/>";

//   Slice out the last 3 companies from the array
app.innerHTML +=  "Slice first 3 companies: " + itCompanies.slice(-3) + "<br/><br/>";

//   Slice out the middle IT company or companies from the array
itCompanies.push("NETFLIX");// itLen++;
app.innerHTML +=  "Slice middle IT company " + (itLen % 2) === 0  ? 
itCompanies.slice(parseInt(itLen / 2) - 1, parseInt(itLen / 2) + 1)  : itCompanies.slice(parseInt((itLen - 1) / 2), parseInt(itLen / 2) + 1) + "<br/><Br/>";

//   Remove the first IT company from the array
app.innerHTML += itCompanies.shift() + "<br/><br/>";

//   Remove the middle IT company or companies from the array
itLen = itCompanies.length;
app.innerHTML +=  itCompanies.splice(parseInt((itLen - 1) / 2), 1) + "<br/><br/>";

//   Remove the last IT company from the array
app.innerHTML += itCompanies.splice(-1, 1) + "<br/><br/>";

//   Remove all IT companies
app.innerHTML += itCompanies.splice(0, itCompanies.length);


