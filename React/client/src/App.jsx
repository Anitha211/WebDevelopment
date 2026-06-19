import React from "react";

// import AppProvider from "./18-06-2026/Context Api/Theme+Login System/AppProvider";
// import Home from "./18-06-2026/Context Api/Theme+Login System/Home";
// import Navbar from "./18-06-2026/Context Api/Theme+Login System/Navbar";
// import Theme from "./18-06-2026/Context Api/Theme/Theme";
// import Themecontext from "./18-06-2026/Context Api/Theme/Themecontext";
// import AttendanceTracker from "./18-06-2026/UseReducer/Attendance Tracker";
// import Count from "./18-06-2026/UseReducer/Count";

// import { Provider } from "react-redux";
// // import { store } from "./18-06-2026/Redux/store";
// // import Cart from "./18-06-2026/Redux/Cart";
// import { store1 } from "./18-06-2026/Redux/store1";
// import Auth from "./18-06-2026/Redux/Auth";

import { Provider } from "react-redux";
import store from "./19-06-2026/Redux Toolkit/store";
import Reducer from "./19-06-2026/Redux Toolkit/Reducer";
import ToggleText from "./19-06-2026/Conditional Rendering/ToggleText";
import LoginForm from "./19-06-2026/Conditional Rendering/LoginForm";
import Loading from "./19-06-2026/Conditional Rendering/API Loading";

function App() {

  return (

    <div style={{ textAlign: "center" }}>

      <h1>Redux Toolkit</h1>
      <Provider store={store}>
        <Reducer />
      </Provider>

      <hr/>

      <h1>Conditional Rendering</h1>

      <ToggleText/>

      <hr/>

      <LoginForm/>

      <hr/>

      <Loading/>



    </div>

  )
}
export default App;