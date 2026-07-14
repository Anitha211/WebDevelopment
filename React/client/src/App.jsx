import React from "react";
import Theme from "./14-07-2026/Context API/Theme";
import ThemeContext from "./14-07-2026/Context API/ThemeContext";
import CounterContext from "./14-07-2026/Context API/CounterContext";
import UserContext from "./14-07-2026/Context API/UserContext";
import { Provider } from "react-redux";
import { Store } from "./14-07-2026/Redux/store";
import { Store1 } from "./14-07-2026/Redux/Store1";
import Redux1 from "./14-07-2026/Redux/Redux1";
import Redux from "./14-07-2026/Redux/Redux";

import store from "./14-07-2026/Redux Toolkit/Store";
import Todo from "./14-07-2026/Redux Toolkit/Todo";
import Auth from "./14-07-2026/Redux Toolkit/Auth";


function App() {

  return (

    <div style={{ textAlign: "center" }}>

      <h1>Context API</h1>

      <ThemeContext/>

      <br/><hr/><br/>

      <CounterContext/>

      <br/><hr/><br/>

      <UserContext/>

      <br/><hr/><br/>

      <h1>REDUX</h1>

      <Provider store={Store}>
        <Redux/>
      </Provider>

      <Provider store={Store1}>
        <Redux1/>
      </Provider>

      <hr/>

      <h1>Redux Toolkit</h1>

      <Provider store={store}>
        <Todo/>
        <Auth/>
      </Provider>

    </div>

  )
}

export default App;                                               