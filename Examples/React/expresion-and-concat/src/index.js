import React from 'react';
import ReactDOM from 'react-dom';

const fName = "First";
const lName = "Last";
var luckyNumber = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    {/* String concat */}
    <h1>Hello {fName + " " + lName}!</h1>
    {/* Using multiple paramerters */}
    <h1>
      Hello {fName} {lName}!
    </h1>
    {/* String interpolation or Template literals*/}
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p> Your lucky number is {luckyNumber} </p>
    {/* only statements can be used */}
    <p> Your lucky number is {Math.floor(Math.random() * 100)} </p>
    {/* expressions can't be used */}
    if(luckyNumber %2 === 0){<h1>even</h1>}
    else{<h1>odd</h1>}
  </div>,

  document.getElementById("root")
);
