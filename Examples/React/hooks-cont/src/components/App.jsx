import React, { useState } from "react";

function App()
{
    //useState for first button to update time
    var [currentTime, setTime] = useState('??:??:??');

    //useState for second time that updates every second
    var [updateTimeASecond, setSecond] = useState('??:??:??');

    setInterval(getTime, 1000);
    function getTime()
    {
        const updatedTime = new Date().toLocaleTimeString();
        setSecond(updatedTime);
    }

    return (
        <div className="container">
            <h1>{currentTime}</h1>
            {/* when the button is clicked set currentTime to the current time/Date().... */}
            <button onClick={() => setTime(currentTime = new Date().toLocaleTimeString())}>Get Time</button>
            <hr></hr>
            {/* getTime function is called every second to automatically update the time */}
            <h1>{updateTimeASecond}</h1>
        </div>
    );
}

export default App;