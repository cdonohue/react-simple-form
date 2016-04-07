import React, { Component } from "react";

import text from "./Text.css";
import Confirm from "../../Confirm";

class Text extends Component {
  constructor() {
    super();
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleConfirm() {
    const { confirm } = this.props;
    const { textInput } = this.refs;

    confirm(textInput.value);
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      return this.handleConfirm();
    };
  }

  componentDidMount() {
    this.refs.textInput.focus();
  }

  render() {
    return (
      <div>
        <input ref="textInput" className={text.textInput} onKeyUp={this.handleKeyUp} type="text" />
        <Confirm buttonText="Ok" label="press ENTER" handleConfirm={this.handleConfirm} />
      </div>
    )
  }
}

export default Text;
