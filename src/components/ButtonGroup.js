import Button from "./Button";
import React from "react";
import "../styles/ButtonGroup.css";

class ButtonGroup extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="button-group">
          <div className="seven"><Button name="7" clickHandler={this.handleClick}/></div>
          <div className="eight" ><Button name="8" clickHandler={this.handleClick} /></div>
          <div className="nine"><Button name="9" clickHandler={this.handleClick} /></div>
          <div className="plus" ><Button name="+" clickHandler={this.handleClick}/></div>
          <div className="four"><Button name="4" className="digit 4" clickHandler={this.handleClick} /></div>
          <div className="five"><Button name="5" clickHandler={this.handleClick} /></div>
          <div className="six"><Button name="6" clickHandler={this.handleClick} /></div>
          <div className="minus"><Button name="-" clickHandler={this.handleClick}/></div>
          <div className="one"><Button name="1" clickHandler={this.handleClick} /></div>
          <div className="two"><Button name="2" clickHandler={this.handleClick} /></div>
          <div className="three"><Button name="3" clickHandler={this.handleClick} /></div>
          <div className="prod"><Button name="x" clickHandler={this.handleClick}/></div>
          <div className="zero"><Button name="0" clickHandler={this.handleClick}/></div>
          <div className="clear"><Button name="C" clickHandler={this.handleClick} /></div>
          <div className="equal"><Button name="=" clickHandler={this.handleClick}/></div>
          <div className="divide"><Button name="/" clickHandler={this.handleClick}/></div>
      </div>
    );
  }
}

export default ButtonGroup;