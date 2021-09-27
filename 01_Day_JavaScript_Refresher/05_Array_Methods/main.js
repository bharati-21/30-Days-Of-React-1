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

// products.filter(prod => {
//     return !Number.isNaN(parseInt(prod.price));
// }).
// map(prod => {
//     return prod.price;
// }).reduce((price,p) => {
//     return p+price;
// })
console.log(sum);

// 7. Calculate the sum of all the prices using reduce only

// 8. Find the first product which doesn't have a price value

// 9. Find the index of the first product which does not have price value

// 10. Check if some products do not have a price value

// 11. Check if all the products have price value

// 12. Explain the difference between forEach, map, filter and reduce

// 13. Explain the difference between filter, find and findIndex

// 14. Explain the difference between some and every