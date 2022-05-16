// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import cars from "./practice";
/************************** **************************/
//First Example

//destructure an array
const [cat, dog] = animals;
console.log(cat);

//destructure an object
//names must match properties inside the object,
//but can be set with the : i.e., name: catName
const{name: catName, sound: catSound} = cat;
console.log(catSound);

//Values can be set if they are undefined, but don't update the original object
const {color = "black"} = cat;
console.log(color);

//nested objects can also be destructured by providing the object name,
//then destructureing that object i.e., feedingRequirements: {food, water}
const{name, sound, feedingRequirements: {food, water}} = cat;
console.log(food);

/************************** **************************/
//Second Example

//Honda
//destructure the cars array into the two different car models
const [honda,  tesla] = cars;
//furth destructure honda object for specified stats
const {speedStats: {topSpeed : hondaTopSpeed}} = honda;
//color is inside an array in the honda object,
//we can name the first value inside the array by
//inserting a name iside the ['name'] i.e., [hondaTopColour]
const{coloursByPopularity: [hondaTopColour]} =  honda;

//Tesla
//furth destructure tesla object for specified stats
const {speedStats: {topSpeed : teslaTopSpeed}} = tesla;
//color is inside an array in the tesla object,
//we can name the first value inside the array by
//inserting a name iside the ['name'] i.e., [teslaTopColour]
const{coloursByPopularity: [teslaTopColour]} =  tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);