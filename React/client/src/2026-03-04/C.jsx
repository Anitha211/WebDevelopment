import React, { useState } from "react";
import "./C.css"

function C() {
     let [tab, setTab] = useState("home")
    return(
        <div>
           <button className={tab == "home" ? "active" : ""} 
           onClick={() => setTab("home")}> Home </button>

           <button className={tab == "about" ? "active" : ""}  
           onClick={() => setTab("about")}> About </button>

           <button className={tab == "contact" ? "active" : ""} 
            onClick={() => setTab("contact")}> Contact </button>
           
           <h3>{tab}</h3>

        </div>
    )
}

export default C;