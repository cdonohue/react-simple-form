import React, { Component } from "react";

import Text from "./Text";
import Select from "./Select";

class Input extends Component {
  componentWillUnmount() {
    console.log("Component's gonna unmount...");
  }

  render() {
    const { choices, confirm, type, name } = this.props;

    if (choices && choices.length) {
      return <Select confirm={confirm} choices={choices} />;
    }

    return <Text name={name} confirm={confirm} type={type} />;
  }
}

export default Input;
