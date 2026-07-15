import React from "react";

import Profile from "./15-07-2026/Conditional rendering/Profile";
import FoodOrder from "./15-07-2026/Conditional rendering/FoodOrder";
import APILoading from "./15-07-2026/Conditional rendering/API Loading";
import TrafficLight from "./15-07-2026/Event Handling and Data Binding/Traffic Light";
import AgeChecker from "./15-07-2026/Event Handling and Data Binding/AgeChecker";
import Feedback from "./15-07-2026/Event Handling and Data Binding/FeedbackForm";
import RegistrationForm from "./15-07-2026/Conditional rendering/User Registration Form";


function App() {

  return (

    <div style={{ textAlign: "center" }}>

      <Profile/>

      <hr/>

      <FoodOrder/>

      <hr/>

      <APILoading/>

      <hr/>

      <TrafficLight/>

      <hr/>

      <AgeChecker/>

      <hr/>

      <Feedback/>
      
      <hr/>

      <RegistrationForm/>

    </div>

  )
}

export default App;

