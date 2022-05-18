import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];
//Map - Create a new array by doing something with each item in an array.
console.log('Map numbers');
const newNumbers = numbers.map(function square (x) {
  return x * x;
});
console.log(newNumbers);

//map - anonomous function (no name)
const anonNumbers = numbers.map(function(x) {
  return x * x;
});
console.log(anonNumbers);

//map - fat arrow 1 input
const arrowNumbers1 = numbers.map(x => {
  return x * x;
});
console.log(arrowNumbers1);

//map - fat arrow function 1 input, reduced size
const arrowNumbersR = numbers.map(x => x * x);
console.log(arrowNumbersR);

//Map - fat arrow with 2 inputs, require '()'
const arrowNumbers2 = numbers.map((x, y) => {
  return x * x;
});
console.log(arrowNumbers2);

//Filter - Create a new array by keeping the items that return true.
console.log('Filter numbers');
//Filter - with fat arrow
const filterNumbers1 = numbers.filter( num => {
  return num < 10;
});
console.log(filterNumbers1);

//Filter - reduced fat arrow
const filterNumbers2 = numbers.filter( num => num < 10);
console.log(filterNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
console.log('Reduce numbers');
//Reduce - 2 input
var reduceNumber1 = numbers.reduce( (accumulator, currentNumber) => {
    return accumulator + currentNumber;
})
console.log(reduceNumber1);

//Find - find the first item that matches from an array.
console.log('Find numbers');
//Find - fat arrow 1 arg
const findNumber1 = numbers.find( num => {
  return num > 10;
})
console.log(findNumber1);

//Find - fat arrow reduced
const findNumber2 = numbers.find( num => num > 10)
console.log(findNumber2);

//FindIndex - find the index of the first item that matches.
console.log('findIndex numbers');
//FindIndex - fat arrow 1 arg
const indexNumber1 = numbers.findIndex(num => {
  return num > 10;
})
console.log(indexNumber1);

//FindIndex - fat arrow 1 arg reduced
const indexNumber2 = numbers.findIndex(num => num > 10);
console.log(indexNumber2);