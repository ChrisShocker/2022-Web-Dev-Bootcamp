import React, { useState } from "react";

function App()
{
    // Hooks
    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");


    //we can handle different variables of the object that triggers an event
    function handleOnChange(event)
    {
        //value of user text triggering event, currently (whatever the user types in input)
        console.log(event.target.value);
        //placeholder value of object triggering event, currently (input placeholder)
        console.log(event.target.placeholder);
        //type of object triggering event, currently (input type)
        console.log(event.target.type);

        //Set name to whatever is being typed in the input
        setName(event.target.value);
    }

    //only update headingText when submit button is clicked
    function handleOnClick()
    {
        setHeading(name);
    }
    //if form is enabled
    // function handleOnClick()
    // {
    //     setHeading(name);
    //      event.preventDefault();
    // }

    return (
        <div className="container">
            <h1>Hello {headingText}</h1>
            {/* Note for forms: 
                once submit button is pressed inside the form, it's refreshed.
                To change this behaviour we can change the form's default onSubmit 
                to equal our custom behavior and it will work as we expected
                i.e., 
                <form onSubmit={handleClick}>
             */}
            {/* onChange triggered evertime input is changed */}
            <input onChange={handleOnChange}
                type="text"
                placeholder="What's your name?"
                // must set the value equal to name to maintain state,
                // since some components maintain their own state 
                // i.e., <input>, <textarea>, <select> are (controlled components) 
                value={name}
            />
            {/* Add listener to change headingText when submit clicked */}
            <button onClick={handleOnClick}>Submit</button>
            
            {/* if form is enabled
             <button type="submit">Submit</button>
            </form> */}

        </div>
    );
}

export default App;