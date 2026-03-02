import React from "react";

let Child = React.memo(({ id, name, price, onDelect, increasePrice, decreasePrice }) => {

    console.log("Child Rendered:", name);


    return (

        <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "10px", backgroundColor: "lightpink" }}>

            <p style={{ color: "darkblue" }}><b>{name}</b></p>

            <p><b>Price:</b> {price}</p>

            <button style={{ margin: "10px", padding: "5px", color: "white", backgroundColor: "seagreen", borderRadius: "5px" }}
                onClick={() => increasePrice(id)}> Increase Price</button>

            <button style={{ margin: "10px", padding: "5px", color: "white", backgroundColor: "seagreen", borderRadius: "5px" }}
                onClick={() => decreasePrice(id)}> Decrease Price</button>

            <button style={{ margin: "10px", padding: "5px", color: "white", backgroundColor: "red", borderRadius: "5px" }}
                onClick={() => onDelect(id)}> Remove Item</button>

        </div>
    )
});

export default Child;