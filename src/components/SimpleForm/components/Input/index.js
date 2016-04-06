import React, { Component } from "react";
import { applyContainerQuery } from "react-container-query";

import input from "./Input.css";

class Input extends Component {
  render() {
    return (
      <div>
        <input autofocus className={input.text} type="text" />
      </div>
    );
  }
}

export default Input;
