//First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
console.log(text);
console.log(text.length);

const regex = /[.,]/g;

text = text.replace(regex, "");
console.log(text);
textArray = text.split(/\s+/);
console.log(textArray);
console.log(textArray.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.findIndex(item => item === 'Honey'), 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.findIndex(item => item === 'Tea')] = 'Green Tea';
console.log(shoppingCart);

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

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.findIndex(country => country === 'Ethiopia') === -1 ? countries.push('Ethiopia') : console.log('ETHIOPIA');
console.log(countries);
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];
  
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.findIndex(tech => tech === 'Sass') === -1 ? webTechs.push('Sass') : console.log('Sass is a CSS preprocessor');
console.log(webTechs);

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

fullStack = frontEnd + backEnd;
console.log(fullStack);






