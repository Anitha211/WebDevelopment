import React from "react";

import Counter from "./06-08-2026/local State/useState";
import Count from "./06-08-2026/local State/useReducer";
import Form from "./06-08-2026/local State/Form";
import Countcontext from "./06-08-2026/Global State/Context API/Countcontext";
import DisplayTheme from "./06-08-2026/Global State/Context API/DisplayTheme";

function App() {

  return (

    <div style={{ textAlign: "center" }}>

      <Counter/>

      <Count/>
      <br></br>
      <Form/>

      <hr/>

      <h2>Context API</h2>

      <Countcontext/>

      <br/><br/>

      <DisplayTheme/>

    </div>

  )
}

export default App;

