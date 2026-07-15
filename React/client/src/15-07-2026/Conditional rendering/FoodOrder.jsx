import React, { useState } from "react";

function FoodOrder() {

    let [status, setStatus] = useState("Preparing");

    return (

        <div>

            <h2>Food Order Status</h2>


            { status === "Preparing" && <div>

                <h3>Preparing....</h3>

                <button onClick={() => setStatus("Out for Delivery")}> Dispatch Order </button>

            </div> }

            { status === "Out for Delivery" && <div>

                <h3>Out for Delivery</h3>

                <button onClick={() => setStatus("Delivered")}> Deliver Order </button>
            </div> }

            { status === "Delivered" && <div>

                <h3> Order Delivered </h3>
            </div> }

        </div>
    )
}

export default FoodOrder;


