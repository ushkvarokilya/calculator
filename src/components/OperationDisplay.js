import React from "react";
import "../styles/OperationDisplay.css";

class OperationDisplay extends React.Component {
  render() {
    return (
      <div className="operation-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default OperationDisplay;