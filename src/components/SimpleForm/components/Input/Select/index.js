import React, { Component } from "react";
import { applyContainerQuery } from "react-container-query";
import classnames from "classnames";
import keydown from "react-keydown";

import select from "./Select.css";

const getLetter = (index) => {
  return "abcdefghijklmnopqrstuvwxyz"[index];
}

class Select extends Component {
  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      // inspect the keydown event and decide what to do
      console.log(keydown.event.which);
    }
  }

  render() {
    const { choices = [], confirm, containerQuery } = this.props;

    return (
      <ul className={select.list}>
        {choices.map(
          (choice, i) => (
            <li className={classnames(select.item, containerQuery)} key={choice.value}>
              <button className={select.button} onClick={() => confirm(choice)}>
                <span className={select.shortcutKey}>{getLetter(i)}</span>
                <span>{choice.text}</span>
              </button>
            </li>
          )
        )}
      </ul>
    )
  }
}

const query = {
  [select.small]: {
    maxWidth: 520,
  },

  [select.large]: {
    minWidth: 521,
  }
}

export default applyContainerQuery(keydown(Select), query);
