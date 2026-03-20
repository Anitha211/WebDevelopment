import React from "react";

import Greeting from "./ASS/Greeting";
import Counter from "./ASS/Counter";
import List from "./ASS/List";
import Login from "./ASS/Conditional Rendering";
import Api from "./React Practice/20-03-2026/API CALLS/Api";
import Fetch from "./React Practice/20-03-2026/API CALLS/fetch";
import Get from "./React Practice/20-03-2026/API CALLS/Get";


function App(){
    
  return(

    <div>
      <Api/>
      <hr></hr>
      <Fetch/>
      <hr></hr>
      <Get/>
    </div>
      
    )
}
export default App;