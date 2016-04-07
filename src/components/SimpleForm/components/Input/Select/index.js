import React, { Component } from "react";
import { applyContainerQuery } from "react-container-query";
import classnames from "classnames";

import select from "./Select.css";

const getLetter = (index) => {
  return "abcdefghijklmnopqrstuvwxyz"[index];
}

class Select extends Component {
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
    maxWidth: 500,
  },

  [select.large]: {
    minWidth: 501,
  }
}

export default applyContainerQuery(Select, query);
