import React, { useState } from "react";

function TrafficLight() {

    let [color, setColor] = useState("Red");

    return(

        <div>

            <h2> {color} Light </h2>

            {color === "Red" && <h2 style={{color: "red"}}>Stop</h2>}

            {color === "Yellow" && <h2 style={{color: "yellow"}}>Slow</h2>}

            {color === "Green" && <h2 style={{color: "green"}}>Go</h2>}

            <button onClick={() => setColor("Green")}>Green</button>

            <button onClick={() => setColor("Yellow")}>Yellow</button>

            <button onClick={() => setColor("Red")}> Red </button>

        </div>
    )
}

export default TrafficLight;

