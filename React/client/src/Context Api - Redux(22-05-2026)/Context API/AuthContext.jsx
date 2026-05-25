import React, { useState } from "react";
import Auth from "./Auth";
import Context1 from "./CreateContext";

function AuthContext() {

    let [isLogin, setLogin] = useState(false);

    let toggleLogin = () => {
        setLogin(!isLogin);
    };

    return (

        <Context1.Provider value={{ isLogin, toggleLogin }}>

            <Auth />

        </Context1.Provider>
    )
}

export default AuthContext;