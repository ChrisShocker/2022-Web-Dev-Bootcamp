import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App()
{
    //create userInput state
    const [userInput, setUserInput] = useState("");

    //create an array to hold userInput items
    const [arrayItems, setArrayItems] = useState([]);

    //handle event when user types inside input
    function handleUserInput(event)
    {
        //call useState function and set value to event value
        setUserInput(event.target.value);
    }

    function handleUserAddClick()
    {
        //get access to all the previous values
        setArrayItems(prevValue =>
        {
            // return a modified array with the previous values and the new value
            return [
                ...prevValue,
                userInput
            ]
        });
        //reset userInput so it's blank for user
        setUserInput("");
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleUserInput} type="text" value={userInput} />
                <button onClick={handleUserAddClick}>
                    <span >Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {/* Go through each item in the array and insert them into an li */}
                    {arrayItems.map(todoItem =>
                    {
                        return <li>{todoItem}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;