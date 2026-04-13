import React from "react";

import { Provider } from "react-redux";
import { store } from "./REACT/10-04-2026/store.jsx";
import Reducer from "./REACT/10-04-2026/Reducer.jsx";
// import Reducer1 from "./REACT/10-04-2026/Reducer1.jsx";

function App(){
    
  return(
  
    <Provider store={store}>
      
        <Reducer/>
        {/* <Reducer1/> */}
     
    </Provider>
  
      
    )
}
export default App;