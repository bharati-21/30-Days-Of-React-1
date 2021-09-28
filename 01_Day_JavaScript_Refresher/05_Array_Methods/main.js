const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

// 1. Print the price of each product using forEach
console.group('Product Price');
products.forEach(prod => {
    console.log(prod.price);
});
console.groupEnd('Product Price');

// 2. Print the product items as follows using forEach
console.group('Product Items ForEach');
products.forEach(prod => {
    console.log(`The price of ${prod.product} is ${Number.isNaN(parseInt(prod.price)) ? "unknown" : prod.price}`);
});
console.groupEnd('Product Items ForEach');

// 3. Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach(prod => {
   sum+= Number(prod.price);
});
console.log(sum);

// 4. Create an array of prices using map and store it in a variable prices
const prodPrices = products.map(prod => {
    return prod.price;
});
console.log(prodPrices);

// 5. Filter products with prices
const prodWithPrices = products.filter(prod => {
    return !Number.isNaN(parseInt(prod.price));
});
console.log(prodWithPrices);

// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
sum = products.map(prod => prod.price)
        .filter(price => !Number.isNaN(parseInt(price)))
        .reduce((currentPrice, prevPrice) => currentPrice+prevPrice);

console.log(sum);

// 7. Calculate the sum of all the prices using reduce only
sum = products.reduce((prod,pr) => {
    return Number(pr.price) + prod;
},0);
console.log(sum);

// 8. Find the first product which doesn't have a price value
const prodWithNoPrice = products.find(prod => {
    return Number.isNaN(parseInt(prod.price))
});
console.log(prodWithNoPrice);

// 9. Find the index of the first product which does not have price value
const indexOfProdWithNoPrice = products.findIndex(prod => {
    return Number.isNaN(parseInt(prod.price))
});
console.log(indexOfProdWithNoPrice);

// 10. Check if some products do not have a price value
const someProductsWithNoPrice = products.some(prod => {
    return Number.isNaN(parseInt(prod.price))
});
console.log(someProductsWithNoPrice);

// 11. Check if all the products have price value
const everyProdWithPrice = products.every(prod => {
    return !Number.isNaN(parseInt(prod.price))
});
console.log(everyProdWithPrice);

// 12. Explain the difference between forEach, map, filter and reduce
/*
forEach and map() are similar in the sense that they traverse and walk through every element of the array.
First difference is in the return type of these methods. While forEach() returns "undefined", map() returns the modified array

forEach() is simply used to traverse through array elements while map() is used to transform array elements.
map() also can be used to chain with other array higher order array methods unlike forEach().
*/

// 13. Explain the difference between filter, find and findIndex
/*
filter() filters out or selects all the array elements with some common property that satisfies a condition. CallbackFn doesn’t run for indexes with unassigned values. 

find() returns the first element that satisfies a condition. Else false. CallbackFn is run even for indexes with unassigned values.

findIndex() returns the index of the first element that satisfied a condition. Else -1. CallbackFn is run even for indexes with unassigned values.
*/

// 14. Explain the difference between some and every
/*
some() returns true if any of the array elements follows a condition. else false. CallbackFn doesn’t run for indexes with unassigned values.

every() returns true if all array elemnts adhere to a condition. Else returns false. CallbackFn doesn’t run for indexes with unassigned values.

*/