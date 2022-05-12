import React from 'react';
import ReactDOM from 'react-dom';

/*
Style inline with external or internal js objects
NOTE:
  parameters are converted to camelBase i.e., font-size = fontSize
  arguments are converted to strings i.e., 2rem = "2rem"
*/

const color = {
  color: "red",
  fontSize: "3rem"
};

const img1 = "https://picsum.photos/seed/asldkfj/500/300";
const img2 = "https://picsum.photos/seed/aslkfj/500/300";
const img3 = "https://picsum.photos/seed/aldkfj/500/300";

ReactDOM.render(
  <div>
    <h1 style={color}>Style object created outside!</h1>
    {/* or create object inside h1*/}
    <h1 style={{ color: "red" }}>Style objected created inside!</h1>

    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <img src={img1} alt="random" />
    <img src={img2} alt="random" />
    <img src={img3} alt="random" />
  </div>,
  document.getElementById("root")
);