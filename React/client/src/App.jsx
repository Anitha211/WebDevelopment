import React from "react";

import { Provider } from "react-redux";
// import { store } from "./REACT/10-04-2026/store.jsx";
import Reducer from "./REACT/10-04-2026/Reducer.jsx";
import Profile from "./REACT/13-04-2026/Conditional Rendering/Profile.jsx";
import Age from "./REACT/13-04-2026/Conditional Rendering/Age.jsx";
import Switch from "./REACT/13-04-2026/Conditional Rendering/Switch.jsx";

import Roles from "./REACT/13-04-2026/Roles Based System/Roles.jsx";
import Theme from "./REACT/13-04-2026/Conditional Rendering/Theme.jsx";




function App(){
    
  return(
    
    <div style={{textAlign: "center", marginTop:"50px"}}>
      <Profile/>
      <hr></hr>
      <Age/>
      <hr></hr>
      <Switch/>
      <hr></hr>
      <Theme/>
      <hr></hr>
      <Roles/>
    

    </div>
    )
}
export default App;