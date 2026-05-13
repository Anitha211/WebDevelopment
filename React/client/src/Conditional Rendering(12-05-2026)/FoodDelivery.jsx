import React, { useState } from "react";

function C() {

    let [orderPlaced, setOrderPlaced] = useState(false);

    return (

        <div>

            <h1>Food Delivery App</h1>

            { orderPlaced ?
                <div>
                    <h2>Your Order is Confirmed</h2>
                    <p>Food will arrive in 30 minutes.</p>
                    <button onClick={() => setOrderPlaced(false)}>Cancel Order</button>

                </div> : <div>

                    <h2>Burger Combo</h2>
                    <p>Price: 199</p>
                    <button onClick={() => setOrderPlaced(true)}>Place Order</button>

                </div>

            }

        </div>

    )
}

export default C;




