// Difference between forEach, map, and filter array methods
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num)); // Prints each number
const mappedNumbers = numbers.map(num => num * 2);
console.log(mappedNumbers); // [2, 4, 6, 8, 10]
const filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log(filteredNumbers); // [2, 4]
