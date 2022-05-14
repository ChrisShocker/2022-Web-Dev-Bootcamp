import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//************************************ *******************************************/
//Map -Create a new array by doing something with each item in an array.
console.log("Map outputs:");
function double(x){
  return x * 2;
}
numbers.map(double)
console.log(numbers.map(double));

//or
//do stuff to each item in the array
numbers.map(function(x){
  console.log(x*2);
  return x * 2;
})

//or
//do stuff to each item and return a new array
const newNumbers = numbers.map(function(x){
  return x * 2;
})
console.log(newNumbers);

//vs

//foreach which requires a new array
var newerNumbers = [];
numbers.forEach(element => {
  newerNumbers.push(element *2);  
});
console.log(newerNumbers);

//************************************ *******************************************/
//Filter - Create a new array by keeping the items that return true.
console.log("Filter outputs:");
const filtered = numbers.filter(function(num){
  return num > 10;
});
console.log(filtered);

//vs

var newFilterNumbers = [];
numbers.forEach(element => {
  if(element > 10)
    newFilterNumbers.push(element);
});
console.log(newFilterNumbers);

//************************************ *******************************************/
//Reduce - Accumulate a value by doing something to each item in an array.
console.log("Reduce outputs:");
var redNumber = numbers.reduce(function(accumulator, currentNumber){
  return accumulator + currentNumber;
})
console.log(redNumber);

//vs
var redForNumber = 0;
numbers.forEach(element => {
  redForNumber += element;
});
console.log(redForNumber);

//************************************ *******************************************/
//Find - find the first item that matches from an array.
console.log("Find outputs:");
var findNum = numbers.find(function(num){
  return num > 10;
})
console.log(findNum);

//************************************ *******************************************/
//FindIndex - find the index of the first item that matches
console.log("indIndex outputs:");
var findIndex = numbers.findIndex(function(num){
  return num > 10;
})
console.log(findIndex);

//************************************ *******************************************/
//Array manip with emojipedia
console.log("emojipedia outputs:");

//truncate emojipedia meaning to only 100 characters
var truncatedEmojiPedia = emojipedia.map(function(values){
  return values.meaning.slice(0, 100);
})
console.log(truncatedEmojiPedia);

