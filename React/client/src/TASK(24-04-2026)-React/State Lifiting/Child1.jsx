import React from "react";

function Child1({ tickets, setTickets }) {

    let increase = () => {
        setTickets(tickets + 1)
    };

    let decrease = () => {
        if(tickets > 1){
        setTickets(tickets - 1)
        }
    };

    return (

        <div>
            <h3>Select Tickets</h3>

            <button onClick={decrease}>Decrease</button>

            <span style={{margin: "10px"}}>{tickets}</span>

            <button onClick={increase}>Increase</button>

        </div>
    )
}

export default Child1;