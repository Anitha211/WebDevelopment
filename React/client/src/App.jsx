// import React from "react";

import AppProvider from "./18-06-2026/Context Api/Theme+Login System/AppProvider";
import Home from "./18-06-2026/Context Api/Theme+Login System/Home";
import Navbar from "./18-06-2026/Context Api/Theme+Login System/Navbar";
import Theme from "./18-06-2026/Context Api/Theme/Theme";
import Themecontext from "./18-06-2026/Context Api/Theme/Themecontext";
import AttendanceTracker from "./18-06-2026/UseReducer/Attendance Tracker";
import Count from "./18-06-2026/UseReducer/Count";

import { Provider } from "react-redux";
// import { store } from "./18-06-2026/Redux/store";
// import Cart from "./18-06-2026/Redux/Cart";
import { store1 } from "./18-06-2026/Redux/store1";
import Auth from "./18-06-2026/Redux/Auth";

function App() {

  return (

    <div>

      <h1>Context API</h1>

      <Themecontext>
        <Theme />
      </Themecontext>

      <hr/>

      <AppProvider>
        <Navbar/>
        <Home/>
      </AppProvider>

      <hr></hr>
      <h1>Use Reducer</h1>

      <Count/>
      <br/>

      <AttendanceTracker/>

      <hr></hr>

      <h1>Redux</h1>

      <Provider store = {store1}>

        {/* <Cart/> */}
        <Auth/>

      </Provider>

    </div>

  )
}
export default App;