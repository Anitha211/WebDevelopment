import React from "react";
import useToggle from "./useToggle";

function Toggle() {

    let { isVisible,toggle} = useToggle();

    return(

        <div style={{padding:"20px",textAlign:"center"}}>

            <h1>User Profile</h1>

            <button onClick={toggle}>
                {isVisible ? "Hide Details" : "Show Details"}
            </button>

            {
                isVisible && <div>

                    <h3><strong>Name: </strong>Jhon Bin</h3>
                    <h3><strong>Role: </strong>React Developer</h3>
                    <h3><strong>Location: </strong>Hyderabad</h3>

                </div>
            }

        </div>
    )
}

export default Toggle;




