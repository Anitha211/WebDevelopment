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

// import { Provider } from "react-redux";
// import store from "./19-06-2026/Redux Toolkit/store";
// import Reducer from "./19-06-2026/Redux Toolkit/Reducer";
// import ToggleText from "./19-06-2026/Conditional Rendering/ToggleText";
// import LoginForm from "./19-06-2026/Conditional Rendering/LoginForm";
// import Loading from "./19-06-2026/Conditional Rendering/API Loading";


import Fetch from "./22-06-2026/API Calls/Fetch";
import Users from "./22-06-2026/Custom Hook/Users";
import Counter from "./22-06-2026/Custom Hook/Counter";
import Theme from "./22-06-2026/Custom Hook/Theme";
import Timer from "./22-06-2026/useEffet/Timer";
import CharacterCount from "./22-06-2026/useEffet/Char Counter";
import Login from "./22-06-2026/useEffet/Login";
import Axios from "./22-06-2026/API Calls/Axios";

function App() {

  return (

    <div style={{ textAlign: "center" }}>

      <h1>API Calls</h1>
      <Fetch />
      <hr />
      <Axios />
      <hr />
      <h1>Custom Hook</h1>
      <Users />
      <hr />
      <Counter />
      <hr />
      <Theme />
      <hr />
      <h1>useEffect Hook</h1>
      <Timer />
      <hr />
      <CharacterCount />
      <hr />
      <Login />

    </div>

  )
}
export default App;