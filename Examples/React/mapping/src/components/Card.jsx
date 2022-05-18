import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props)
{
  return (
    <div className="card">
      <div className="top">
        <p className="id">{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar
          img={props.img}></Avatar>
      </div>
      <div className="bottom">
        <Details
          detailInfo={props.tel}
        ></Details>
        <Details
          detailInfo={props.email}
        ></Details>
      </div>
    </div>
  );
}

export default Card;