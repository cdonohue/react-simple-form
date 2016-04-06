import React from "react";
import classnames from "classnames";
import advanceForm from "../../actions";

import step from "./Step.css";

import Input from "../Input";

import createConfirm from "../Confirm";

const Step = React => ({ question, isActive, state }) => {
  const Confirm = createConfirm(React);

  const handleConfirm = () => {
    advanceForm(state);
  }

  return (
    <div className={classnames(step.container, {[step.active]: isActive})}>
      <span className={step.item}>
        {state.currentStep}.
      </span>
      <section className={step.question}>
        {question.description}
      </section>
      <section className={step.content}>
        <div className={step.description}>
          {question.helperText}
        </div>
        <Input type="text" />
        <div className={step.confirm}>
          <Confirm buttonText="Ok" label="press ENTER" onConfirm={handleConfirm} />
        </div>
      </section>
    </div>
  )
}

export default Step;
