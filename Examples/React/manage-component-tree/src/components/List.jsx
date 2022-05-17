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

import React from "react";
function List(props)
{
    function handleUserClick(event)
    {
    }

    return (
        // state being managed locally based on props
        <li >{props.item}</li>
    )
}

export default List;