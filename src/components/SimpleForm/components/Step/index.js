import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from "classnames";

import actions from "../../actions";

import step from "./Step.css";

import Input from "../Input";

const mapStateToProps = (state) => ({
  currentStep: state.form.currentStep
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

const Step = ({ advanceFormStep, question, isActive, currentStep, saveFormValue }) => {
  const saveValue = (value) => {
    saveFormValue(question.id, value);
    advanceFormStep();
  }

  return (
    <div className={step.container}>
      <span className={step.item}>
        {currentStep}.
      </span>
      <section className={step.question}>
        {question.description}
      </section>
      <section className={step.content}>
        <div className={step.description}>
          {question.helperText}
        </div>
        <Input
          type={question.type}
          name={question.id}
          choices={question.choices}
          confirm={saveValue}
        />
      </section>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Step);
