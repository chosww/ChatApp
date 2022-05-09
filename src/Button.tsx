import React, { Component } from 'react';
//import "./Button.css";

type ButtonProp = {buttonText : string, buttonNumber : number, buttonClass : string}

class Button extends Component<ButtonProp, {}> {
    handleOnClick = () => {
        for(let i = this.props.buttonNumber; i > 0; i--){
            console.log("TESTETETETTESTETET")
        }
    }

    render() {
        return (
            <div onClick={this.handleOnClick} className={this.props.buttonClass}>{this.props.buttonText}</div>
        )
    }
}

export default Button