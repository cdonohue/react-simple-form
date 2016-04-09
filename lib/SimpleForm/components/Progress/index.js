import React, { Component } from "react";
import progress from "./Progress.css";

class Progress extends Component {
  render() {
    const { percentage } = this.props;
    return (
      <div className={progress.container}>
        <div style={{width: `${percentage}%`}} className={progress.filler} ></div>
      </div>
    );
  }
}

export default Progress;
