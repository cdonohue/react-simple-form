import React, { Component } from "react";

import Text from "./Text";
import Select from "./Select";

class Input extends Component {
  render() {
    const { choices, confirm } = this.props;

    if (choices && choices.length) {
      return <Select confirm={confirm} choices={choices} />;
    }

    return <Text confirm={confirm} />;
  }
}

export default Input;
