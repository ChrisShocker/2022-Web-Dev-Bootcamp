import React from "react";
import Login from "./Login";

var isLoggedIn = true;
var hour = new Date().getHours();

function App()
{
    return (
        <div className="container">
            {/* Can't use statement, so use a ternary expression*/}
            {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login></Login>} */}

            {/* can shorten to: */}
            {isLoggedIn ? <h1>Hello</h1> : <Login></Login>}
            {/* since isLoggedIn is a boolean */}

            {/* can use && operator: 'render <h1> only i hour > 1'.
            if left is false <h1> is skipped */}
            {hour > 1 && <h1>Time greater then 1</h1>}

        </div>
    );
}

export default App;