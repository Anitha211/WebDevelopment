import React from "react";

function Child2({tickets, ticketPrice}) {

    let totalCost = tickets * ticketPrice 

    return(

        <div>
            <h3>Bookings</h3>

            <h2>Total Price : {totalCost}</h2>
        </div>
    )
}

export default Child2;