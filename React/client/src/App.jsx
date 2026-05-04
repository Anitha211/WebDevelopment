import React from "react";
// import A from "./TASK(24-04-2026)-React/Components/Functional Component/A";
// import A1 from "./TASK(24-04-2026)-React/Components/Class Component/A1";
import Parent from "./TASK(24-04-2026)-React/State Communication/Parent";
import Props from "./TASK(24-04-2026)-React/Props Drilling/Props";
import State from "./TASK(24-04-2026)-React/State Lifiting/State";
import ThemeContext from "./TASK(24-04-2026)-React/Global State/Context Api/Theme/ThemeContext";
// import Cart from "./TASK(24-04-2026)-React/Global State/Context Api/context+useReduser/Cart";
// import { store } from "./TASK(24-04-2026)-React/Global State/Redux/Store"
import { Provider } from "react-redux";
import Redux from "./TASK(24-04-2026)-React/Global State/Redux/Redux";
// import {store} from "./TASK(27-04-2026)-React/Reduxtoolkit/store";
// import Reducer from "./TASK(27-04-2026)-React/Reduxtoolkit/Reducer";
import ToggleText from "./TASK(27-04-2026)-React/Conditional Rendering/ToggleText";
import Theme from "./TASK(27-04-2026)-React/Conditional Rendering/Theme";
import Roles from "./TASK(27-04-2026)-React/Conditional Rendering/Role based example/Roles";
import Custom from "./TASK(27-04-2026)-React/Custom hook/Custom";
// import Get from "./TASK(27-04-2026)-React/Api calls/Get";
import Axios from "./2026-03-03/Api/Axios/Axios";
import Api from "./TASK(27-04-2026)-React/Api calls/Api";
import C from "./25-02-2026/API Methods/C";
// import Fetch from "./TASK(27-04-2026)-React/Api calls/Fetch";
// import A from "./Task(28-04-2026)-React/UsecallBack,ReactMemo,Usememo/A"

import Cart from "./Task(28-04-2026)-React/UsecallBack,ReactMemo,Usememo/Cart";
import Users from "./Task(28-04-2026)-React/UsecallBack,ReactMemo,Usememo/Users";

import A from "./TASK(29-04-2026)-React/API calls/A"
import Fetch from "./TASK(29-04-2026)-React/API calls/Fetch";
import A1 from "./TASK(29-04-2026)-React/Conditional Rendering/A1";
import B from "./TASK(29-04-2026)-React/API calls/B";
import Get from "./TASK(29-04-2026)-React/API calls/Get";
import Checker from "./TASK(29-04-2026)-React/Conditional Rendering/Checker";
import Todo from "./TASK(29-04-2026)-React/UseReducer/Todo";
import FeedbackForm from "./TASK(29-04-2026)-React/UseReducer/FeedbackForm";
import store from "./TASK(29-04-2026)-React/Redux Toolkit/store";
import Reducer from "./TASK(29-04-2026)-React/Redux Toolkit/Reducer";

function App() {

  return (

    <div>
      {/* <A />
      <hr></hr>
      <A1 />
      <hr></hr>
      <Parent />
      <hr></hr>
      <h1>Props Drilling</h1>
      <Props />
      <hr></hr>
      <h1>State Lifiting</h1>
      <State />
      <hr></hr>
      <h1>Context Api</h1>
      <ThemeContext />
      <hr></hr>
      <Cart />
      <hr></hr> */}
      {/* <h1>Redux</h1> */}
      {/* <Provider store={store}> */}
      {/* <Redux/> */}
      {/* </Provider> */}

      {/* ////////////////////// */}

      {/* <h1>Redux Toolkit - </h1>
      <Provider store={store}>
        <Reducer/>
      </Provider>

      <hr></hr>
      <h1>Conditional Rendering - </h1>
      <ToggleText/>
      <hr></hr>
      <Theme/>
      <hr></hr>
      <Roles/>
      <hr></hr>
      <h1>Custom hook - </h1>
      <Custom/>
      <hr/>
      <h1>Api Calls-</h1>
      <Get/>
      <hr/>
      <Api/>
      <hr/>
      <Fetch/> */}

      {/* //////////// */}

      {/* <A/>
      <hr/>
      <Cart/>
      <hr/>
      <Users/> */}

      <h1 style={{ textAlign: "center" }}>Api calls</h1>
      <A />
      <hr />
      <Fetch />
      <hr />
      <B />
      <hr />
      <Get />
      <hr />
      <h1 style={{ textAlign: "center" }}>Conditional Rendering</h1>
      <A1 />
      <hr />
      <Checker />
      <hr/>
      <h1 style={{ textAlign: "center" }}>Use Reducer</h1>
      <Todo/>
      <FeedbackForm/>
      <hr/>
      <h1>Redux Toolkit</h1>
      <Provider store={store}>
        <Reducer/>
      </Provider>

    </div>
  )
}
export default App;