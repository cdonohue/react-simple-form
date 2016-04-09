import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from "classnames";
import { template } from "lodash";
import { applyContainerQuery } from "react-container-query";

import actions from "../../actions";

import step from "./Step.css";

import Input from "../Input";

const mapStateToProps = (state) => ({
  currentStep: state.form.currentStep,
  form: state.form.data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

class Step extends Component {
  saveValue = (value) => {
    const { advanceFormStep, question, saveFormValue } = this.props;

    saveFormValue(question.id, value);
    advanceFormStep();
  }

  fillInTemplateFromFormState = (templateStr) => {
    const { form } = this.props;

    return template(templateStr)(form);
  }

  render() {
    const {
      advanceFormStep,
      containerQuery,
      question,
      currentStep,
      saveFormValue
    } = this.props;

    return (
      <div key={currentStep} className={classnames(step.flip, step.container, containerQuery)}>
        <section>
          <span className={step.item}>
            {currentStep}.
          </span>
          <div className={step.question}>
            {this.fillInTemplateFromFormState(question.title)}
          </div>
        </section>
        <section className={step.content}>
          <div className={step.description}>
            {question.description}
          </div>
          <Input
            type={question.type}
            name={question.id}
            choices={question.choices}
            confirm={this.saveValue}
          />
        </section>
      </div>
    )
  }
}

const query = {
  [step.small]: {
    maxWidth: 400,
  },

  [step.large]: {
    minWidth: 401
  }
}

export default applyContainerQuery(
  connect(mapStateToProps, mapDispatchToProps)(Step),
  query
);
