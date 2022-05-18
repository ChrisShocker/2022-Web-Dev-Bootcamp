import React, { useState } from "react";

function App()
{
    const [headingText, setHeadingText] = useState("Hello");
    //onClick change the headingText to "Submitted"
    function handleClick()
    {
        setHeadingText("Submitted");
    }

    const [isMouseOver, setMouseOver] = useState(false);
    //Once onMouseOver event is occurs set setMouseOver to true color ("black");
    function handleMouseOver()
    {
        setMouseOver(true);
    }

    //if the mouse is outside the button set mouse over back to false ("white");
    function handleMouseOut()
    {
        setMouseOver(false);
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                // change color to black for onMouseOver event
                style={
                    { backgroundColor: isMouseOver ? "black" : "white"}
                }
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}

            >Submit</button>
        </div>
    );
}

export default App;