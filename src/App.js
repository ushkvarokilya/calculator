import React from "react";
import OperationDisplay from "./components/OperationDisplay";
import ButtonGroup from "./components/ButtonGroup";
import calculate from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <OperationDisplay value={this.state.next || this.state.result || "0"} />
        <ButtonGroup clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
