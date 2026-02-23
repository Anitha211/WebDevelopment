import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(){
    let [count,setCount] = useState(0);

    let increase = () => {
        setCount(count + 10)
    }
    
    return(
        <div>
          <Header/>

          <div style={{backgroundColor:"yellow",padding:"10px", textAlign:"center",border:"2px solid black"}}>
            <p>Layout</p>
            <h3>COUNT: {count}</h3>
            <button onClick={increase}>Increase</button>

          </div>

          <Footer/>
        </div>
    )
}

export default Layout;