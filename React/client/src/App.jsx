import React from "react";

// // import A from "./TASK(24-04-2026)-React/Components/Functional Component/A";
// // import A1 from "./TASK(24-04-2026)-React/Components/Class Component/A1";
// import Parent from "./TASK(24-04-2026)-React/State Communication/Parent";
// import Props from "./TASK(24-04-2026)-React/Props Drilling/Props";
// import State from "./TASK(24-04-2026)-React/State Lifiting/State";
// import ThemeContext from "./TASK(24-04-2026)-React/Global State/Context Api/Theme/ThemeContext";
// // import Cart from "./TASK(24-04-2026)-React/Global State/Context Api/context+useReduser/Cart";
// // import { store } from "./TASK(24-04-2026)-React/Global State/Redux/Store"
// import { Provider } from "react-redux";
// import Redux from "./TASK(24-04-2026)-React/Global State/Redux/Redux";
// // import {store} from "./TASK(27-04-2026)-React/Reduxtoolkit/store";
// // import Reducer from "./TASK(27-04-2026)-React/Reduxtoolkit/Reducer";
// import ToggleText from "./TASK(27-04-2026)-React/Conditional Rendering/ToggleText";
// import Theme from "./TASK(27-04-2026)-React/Conditional Rendering/Theme";
// import Roles from "./TASK(27-04-2026)-React/Conditional Rendering/Role based example/Roles";
// import Custom from "./TASK(27-04-2026)-React/Custom hook/Custom";
// // import Get from "./TASK(27-04-2026)-React/Api calls/Get";
// import Axios from "./2026-03-03/Api/Axios/Axios";
// import Api from "./TASK(27-04-2026)-React/Api calls/Api";
// import C from "./25-02-2026/API Methods/C";
// // import Fetch from "./TASK(27-04-2026)-React/Api calls/Fetch";
// // import A from "./Task(28-04-2026)-React/UsecallBack,ReactMemo,Usememo/A"

// import Cart from "./Task(28-04-2026)-React/UsecallBack,ReactMemo,Usememo/Cart";
// import Users from "./Task(28-04-2026)-React/UsecallBack,ReactMemo,Usememo/Users";

// import A from "./TASK(29-04-2026)-React/API calls/A"
// import Fetch from "./TASK(29-04-2026)-React/API calls/Fetch";
// import A1 from "./TASK(29-04-2026)-React/Conditional Rendering/A1";
// import B from "./TASK(29-04-2026)-React/API calls/B";
// import Get from "./TASK(29-04-2026)-React/API calls/Get";
// import Checker from "./TASK(29-04-2026)-React/Conditional Rendering/Checker";
// import Todo from "./TASK(29-04-2026)-React/UseReducer/Todo";
// import FeedbackForm from "./TASK(29-04-2026)-React/UseReducer/FeedbackForm";
// import store from "./TASK(29-04-2026)-React/Redux Toolkit/store";
// import Reducer from "./TASK(29-04-2026)-React/Redux Toolkit/Reducer";


// import A from "./Web Assessment/Reducer/A";
// import Api from "./Web Assessment/API/Api"
// import Theme from "./Web Assessment/ContextApi/Theme";
// import { Provider } from "react-redux"
// import { ThemeContext } from "./Web Assessment/ContextApi/CreateContext";
// import Tabs from "./Web Assessment/Dynamic Tabs Component/Tabs";
// import Users from "./Web Assessment/API Fetch with Loading and Error Handling/Users";
// import Fetch from "./Api Callls(14-05-2026)/Fetch/Fetch";
// import A from "./Web Assessment/ContextApi/A";

// 

// import A from "./Conditional Rendering(12-05-2026)/Loading";
// import B from "./Conditional Rendering(12-05-2026)/GradeChecker";
// import C from "./Conditional Rendering(12-05-2026)/FoodDelivery";
// import D from "./Conditional Rendering(12-05-2026)/Employee Performance System"


// 

// import A from "./Optimization Techniques(13-05-2026)/A"
// import Cart from "./Optimization Techniques(13-05-2026)/Cart";
// import Cart1 from "./Optimization Techniques(13-05-2026)/Shopping Cart/Cart1";

// 

// import Fetch from "./Api Callls(14-05-2026)/Fetch/Fetch";
// import A from "./Api Callls(14-05-2026)/Cart Api/A"
// import Axios from "./Api Callls(14-05-2026)/Axios/Axios";

// 
// import ThemeContext from "./Context Api - Redux(22-05-2026)/Context API/ThemeContext";
// import AuthContext from "./Context Api - Redux(22-05-2026)/Context API/AuthContext";
// // import store from "./Context Api - Redux(22-05-2026)/Redux/Store";
// import A from "./Context Api - Redux(22-05-2026)/Redux/A";
// import { Provider } from "react-redux";
// import store1 from "./Context Api - Redux(22-05-2026)/Redux/Store1";
// import A1 from "./Context Api - Redux(22-05-2026)/Redux/A1";
// import TimerContext from "./Context Api - Redux(22-05-2026)/Context API/TimerContext";
// // import store1 from "./Context Api - Redux(22-05-2026)/Redux/Store1";

//

import Reducer from "./UseReducer,ReduxToolkit(25-05-2026)/Redux Toolkit/Reducer";
import store from "./UseReducer,ReduxToolkit(25-05-2026)/Redux Toolkit/Store";
import { Provider } from "react-redux";
import CartReducer from "./UseReducer,ReduxToolkit(25-05-2026)/Redux Toolkit/CartReducer";
import Form from "./UseReducer,ReduxToolkit(25-05-2026)/Use Reducer/Form";
import FeedbackForm from "./UseReducer,ReduxToolkit(25-05-2026)/Use Reducer/FeedBack";


function App() {

  return (

    <div style={{ textAlign: "center" }}>

      <h1><u>Use Reducer</u></h1>

      <Form />
      <hr/>
      <FeedbackForm/>


      <hr /><hr />

      <h1><u>Redux Toolkit</u></h1>

      <Provider store={store}>
        <Reducer />
        <hr />
        <CartReducer />
      </Provider>

    </div>

  )
}
export default App;