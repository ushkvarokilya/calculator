import Button from "./Button";
import React from "react";
import "../styles/ButtonGroup.css";

class ButtonGroup extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    const keys = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', 'x', '0', 'C', '=', '/'];
    const buttons = keys.map((item, number) => (<div className={`class-${number}`}><Button name={item} clickHandler={(e) => this.handleClick(e)}/></div>));
    return (
      <div className="button-group">
          {buttons}
      </div>
    );
  }
}

export default ButtonGroup;