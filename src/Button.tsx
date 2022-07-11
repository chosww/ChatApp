import React, { Component } from 'react';
import "./Button.css";

type ButtonProp = {buttonText : string, buttonNumber : number, buttonClass : string}

class Button extends Component<ButtonProp, {}> {

    buttonAction = () => {
        console.log("Test button clicked!")

    }

    handleOnClick = () => {
        for(let i = this.props.buttonNumber; i > 0; i--){
            this.buttonAction()
        }
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter' || e.key === " " || e.code === 13 || e.code === 32) {
            this.buttonAction()
        }
    }

    render() {
        return (
            <div onClick={
                this.handleOnClick} 
                className={this.props.buttonClass} 
                role="button" 
                tabIndex={0}
                onKeyDown={this.handleKeyDown}>
                    {this.props.buttonText}</div>
        )
    }
}


export default Button;