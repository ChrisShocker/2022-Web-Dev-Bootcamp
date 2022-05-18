import React from "react";

function Button(props)
{
    return <button type={props.type}>{props.buttonName}</button>;
}

export default Button;