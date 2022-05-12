import React from 'react';
import ReactDOM from 'react-dom';
/*
  React
  Babel recompiles modern JS like ES6 to browser compatible js,
  so it can be used across all browsers

ReactDOM syntax:
ReactDOM.render('What To Show', 'Where To Show', 'Callback');

React:
ReactDOM.render(<h1>Hello World!</h1>
,document.getElementById("root"));

VS traditional js:
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
*/

ReactDOM.render(
  //To have multiple tags, they must be placed inside a div
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>
  , document.getElementById("root")
);
