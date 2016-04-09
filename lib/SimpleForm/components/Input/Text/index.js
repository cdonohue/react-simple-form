import React, { Component } from "react";

import text from "./Text.css";
import Confirm from "../../Confirm";

class Text extends Component {
  handleConfirm = () => {
    const { confirm } = this.props;
    const { textInput } = this.refs;

    confirm(textInput.value);
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      return this.handleConfirm();
    };
  }

  componentDidMount() {
    this.refs.textInput.focus();
  }

  render() {
    const { type, name } = this.props;

    return (
      <div>
        <input autoComplete="off" ref="textInput" name={name} className={text.textInput} onKeyUp={this.handleKeyUp} type={type} />
        <Confirm buttonText="Ok" label="press ENTER" handleConfirm={this.handleConfirm} />
      </div>
    )
  }
}

export default Text;
