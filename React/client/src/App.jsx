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
import Reducer from "./React Practice/25-03-2026 - Reduxtoolkit/Reducer.jsx";
// import store from "./React Practice/25-03-2026 - Reduxtoolkit/Store.jsx";
import { Provider } from "react-redux";
import Count from "./REACT/09-04-2026/Context api/Count.jsx";
import Context from "./REACT/09-04-2026/Cart/Context.jsx";
import Theme from "./REACT/09-04-2026/Theme/Theme.jsx";

function App(){
    
  return(
  
  <div>
       <Count/>
       <Theme/>
       <br></br>
       <br></br>
       <hr></hr>
       <Context/>

  </div>
      
    )
}
export default App;