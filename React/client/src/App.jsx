// import React from "react";


import Counter from "./28-05-2026(Custom Hook, Conditional Rendering)/Custom Hook/Counter";
import Toggle from "./28-05-2026(Custom Hook, Conditional Rendering)/Custom Hook/Toggle";
import FoodSearch from "./28-05-2026(Custom Hook, Conditional Rendering)/Custom Hook/FoodSearch";
import Theme from "./28-05-2026(Custom Hook, Conditional Rendering)/Conditional Rendering/Theme";
import Authentication from "./28-05-2026(Custom Hook, Conditional Rendering)/Conditional Rendering/Authentication";
import Roles from "./28-05-2026(Custom Hook, Conditional Rendering)/Conditional Rendering/Role Based Login/Roles";

function App() {

  return (

    <div style={{ textAlign: "center" }}>

      {/* <h1>Custom hook</h1> */}

      {/* <Counter/>
       <br/><hr/><br/>
      <Toggle/>
      <br/><hr/><br/>
      <FoodSearch/> */}

      <h1>Conditional Rendering</h1>

      <Theme/>
      <br/><hr/><br/>
      <Authentication/>
      <br/><hr/><br/>
      <Roles/>

    </div>

  )
}
export default App;