import React from "react";

import { Provider } from "react-redux";
// import { store } from "./REACT/10-04-2026/store.jsx";
import Reducer from "./REACT/10-04-2026/Reducer.jsx";
import Profile from "./REACT/13-04-2026/Conditional Rendering/Profile.jsx";
import Age from "./REACT/13-04-2026/Conditional Rendering/Age.jsx";
import Switch from "./REACT/13-04-2026/Conditional Rendering/Switch.jsx";

import Roles from "./REACT/13-04-2026/Roles Based System/Roles.jsx";
import Theme from "./REACT/13-04-2026/Conditional Rendering/Theme.jsx";
// import Fetch from "./REACT/14-04-2026/Fetch/Fetch.jsx";
// import Api from "./REACT/14-04-2026/Axios/Api.jsx";
import Axios from "./REACT/14-04-2026/Axios/Axios.jsx";

// import A from "./REACT/15-04-2026/ReactMemo,usememo,usecallback/A.jsx";
import Cart from "./REACT/15-04-2026/ReactMemo,usememo,usecallback/Cart/Cart.jsx";
import A from "./REACT/16-04-2026/UseEffect/useEffect.jsx";
import Api from "./REACT/16-04-2026/UseEffect/Api.jsx";
import Timer from "./REACT/16-04-2026/UseEffect/Timer.jsx";
import Custom from "./REACT/16-04-2026/Custom Hook/Custom.jsx";

function App(){

  return(
    
    <div>
      <A/>
      <Api/>
      <Timer/>
      <hr></hr>
      <Custom/>
    </div>


    )
}
export default App;