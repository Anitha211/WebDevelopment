import React from "react";
import { Component } from "react";
import B from "./B"

export class A extends Component {
    render() {
        let name = "Amit"
        let role = "Developer"


        return(
            <div>
                <h1>Class Component</h1>
                <B name={name}
                   role={role}
                />
            </div>
        )
    }
}

export default A;