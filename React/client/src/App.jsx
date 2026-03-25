import React from "react";

import Greeting from "./ASS/Greeting";
import Counter from "./ASS/Counter";
import List from "./ASS/List";
import Login from "./ASS/Conditional Rendering";
// import Api from "./React Practice/20-03-2026/API CALLS/Api";
import Fetch from "./React Practice/20-03-2026/API CALLS/fetch";
import Get from "./React Practice/20-03-2026/API CALLS/Get";
// import A from "./React Practice/23-03-2026/A";
import Cart from "./React Practice/23-03-2026/cart";
import A from "./React Practice/24-03-2026/useEffect/A.jsx";
import B from "./React Practice/24-03-2026/useEffect/b.jsx";
import A1 from "./React Practice/24-03-2026/Context Api/Count/A1.jsx";
import Api from "./React Practice/24-03-2026/useEffect/Api.jsx";
import Context from "./React Practice/24-03-2026/Context Api/Cart/Context.jsx";
import Reducer from "./React Practice/25-03-2026 - Reduxtoolkit/Reducer.jsx";
import store from "./React Practice/25-03-2026 - Reduxtoolkit/Store.jsx";
import { Provider } from "react-redux";

function App(){
    
  return(
  
  <div style={{textAlign:"center"}}>
    <h1><u>Redux Toolkit</u></h1>
    <Provider store = {store}>

        <Reducer/>
        
    </Provider>
      
  </div>
      
    )
}
export default App;