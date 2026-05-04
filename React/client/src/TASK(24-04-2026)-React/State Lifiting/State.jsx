import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function State() {

    let [tickets,setTickets] =useState(1);

    let ticketPrice = 200;

    return(

        <React.Fragment>
            <h2>Movie Ticket Booking</h2>

            <Child1 tickets={tickets}
                     setTickets={setTickets}
            />

            <Child2 tickets={tickets}
                    ticketPrice={ticketPrice}
            />

        </React.Fragment>
    )
}

export default State;