import React, { useState } from "react";

function InputArea(props)
{
    const [inputText, setInputText] = useState("");

    function handleChange(event)
    {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <div className="form">
            {/* when input changes update the state with value and inputText */}
            <input onChange={handleChange} type="text" value={inputText} />
            {/* Once Add button is clicked:
                call function at props.onAdd (add() in App.jsx),
                pass in the new inputText to add to list,
                then reset the value
                NOTE: in order to pass the function properly, 
                it must be passed inside another function 
                i.e., onClick={() =>...
                ) */}
            <button onClick={() =>
            {
                props.onAdd(inputText);
                setInputText("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;