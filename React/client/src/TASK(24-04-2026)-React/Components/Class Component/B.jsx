import React, { Component } from "react";

export class B extends Component {
    render() {
        
        return (
            <div>
                <h2>Nmae: {this.props.name}</h2>
                <p>Role: {this.props.role}</p>
            </div>
        )
    }
}

export default B;