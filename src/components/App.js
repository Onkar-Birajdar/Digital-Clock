import React, { useState } from "react";

// function currentTime() {

// }
function App() {
    let [time, newTime] = useState(new Date());

    function currentTime() {
        newTime(new Date());
    } setInterval(currentTime, 1000);

    return (
        <div className="container">
            <h1>
                {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
            </h1>
            <button onClick={currentTime}>Get Time</button>
        </div>
    );
}

export default App;