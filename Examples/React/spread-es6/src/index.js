import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Basic spread example:
//how to add the citrus array to the end of fruits array?
//use es6 spread ..."arrayName"
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];
console.log(fruits);

//Can also insert objects into other objects
//using spread, puts all objects into the host object under the same object
const fullName = {
    fName: "Jake",
    lName: "Rhodes"
}

const users = {
    ...fullName,
    id: 1,
    userName: "JakeRhodes"
}

console.log(users);