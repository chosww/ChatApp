import React, { Component } from 'react';
import "./Button.css";

type ButtonProp = {buttonText : string, buttonNumber : number, buttonClass : string}

class Button extends Component<ButtonProp, {}> {
    handleOnClick = () => {
        for(let i = this.props.buttonNumber; i > 0; i--){
            console.log("Test button clicked!")
        }
    }

    render() {
        return (
            <div onClick={this.handleOnClick} className={this.props.buttonClass} role="button" tabIndex={0}>{this.props.buttonText}</div>
        )
    }
}


export default Button;