//Import the useState function from React module 
import React, {useState} from "react";


function App()
{
    //starting state is inside the ()
    //useState returns an array
    //destruct the returned useState array with [count, setCount]
    //count is starting state number at useState[0]
    //setCount is a function inside useState at useState[1]
    const [count, setCount] = useState(0);
    console.log(useState(0));

    function increment(){
        setCount(count + 1);
    }

    return <div className="container">
        {/* output from useState is an array */}
        <h1>{count}</h1>
        {/* when the button is clicked call a increment function and use 
        the setCount function from useState to change count's state*/}
        <button onClick={increment}>B1 +</button>

        {/* to shorten the code, we don't have to call an external function
        we can instead create an anon function as such: */}
        <button onClick={() => setCount(count + 1)}>B2 +</button>

        {/* Decrement example */}
        <button onClick={() => setCount(count - 1)}>-</button>

    </div>
}

export default App;