import React from 'react';
import ReactDOM from 'react-dom';
import Pi, { doublePi, tripplePi } from "./math";
// Can also import an entire component as an object
import * as PiAll from "./math";
import { add, subtract, multiply, divide } from "./calculator";

ReactDOM.render(
  <div>
    <ul>
      <li>{Pi}</li>
      <li>{doublePi()}</li>
      <li>{tripplePi()}</li>
    </ul>
    <ul>
      <li>{PiAll.default}</li>
      <li>{PiAll.doublePi()}</li>
      <li>{PiAll.tripplePi()}</li>
    </ul>
    <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>
  </div>,
  document.getElementById("root")
);