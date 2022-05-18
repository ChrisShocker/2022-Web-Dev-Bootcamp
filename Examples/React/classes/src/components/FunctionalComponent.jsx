import React, { useState } from "react";

//HOOK VERSION:
//simple counter app that increases count number
//more boiler plate, binding, and more complex
function FunctionalComponent()
{
    const [count, setCount] = useState(0);

    function increase()
    {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default FunctionalComponent;
