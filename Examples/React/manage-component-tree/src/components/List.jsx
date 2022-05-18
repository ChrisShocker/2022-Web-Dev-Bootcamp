// //example of state being managed locally using props
// import React, { useState } from "react";
// function List(props)
// {
//     const [clicked, userClicked] = useState("false");

//     function handleUserClick(event)
//     {
//         userClicked(prevValue =>
//         {
//             return !prevValue;
//         });
//     }

//     return (
//         // state being managed locally based on props
//         <li style={{ textDecoration: clicked ? "line-through" : "" }}
//             onClick={handleUserClick}>{props.item}</li>
//     )
// }

//example managing state NOT LOCAL, from another component 
//i.e., the array of times in APP component
import React from "react";
function List(props)
{
    return (
        // state being managed NON LOCAL, 
        //based on NON_LOCAL function "onChecked" passed in by props
        //When the div is clicked the function at props.onChecked is triggered

        //NOTE: we must create a function to pass back the props.id,
        //so props.id is passed back once the div is clicked
        <div onClick={() => {
            console.log(props.id);
            //call function that was passed in with props (onchecked)
            //and pass back the id of the div/item that was clicked back 
            //to the function in props at App.jsx which calls whatever function is set to 
            //onchecked (deleteItem).
            props.onChecked(props.id);
        }}>
            <li >{props.item}</li>
        </div>
    )
}

export default List;