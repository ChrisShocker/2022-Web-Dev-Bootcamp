import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props)
{
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>

        {/* images is now abstracted out to an Avatar component, so
        pass the image prop to the Avatar component to handle */}
        <Avatar
          img={props.img}></Avatar>
      </div>
      <div className="bottom">

        {/* Phone number and email has been abstracted out to Details component, so
        pass the tel and email props to the Details component to handle */}
        <Details
          tel={props.tel}
          email={props.email}
        ></Details>
      </div>
    </div>
  );
}

export default Card;