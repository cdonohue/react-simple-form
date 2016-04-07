import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from "classnames";
import { template } from "lodash";

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
  constructor() {
    super();

    this.saveValue = this.saveValue.bind(this);
    this.fillInTemplateFromFormState = this.fillInTemplateFromFormState.bind(this);
  }

  saveValue(value) {
    const { advanceFormStep, question, saveFormValue } = this.props;

    saveFormValue(question.id, value);
    advanceFormStep();
  }

  fillInTemplateFromFormState(templateStr) {
    const { form } = this.props;

    return template(templateStr)(form);
  }

  render() {
    const { advanceFormStep, question, isActive, currentStep, saveFormValue } = this.props;

    return (
      <div className={step.container}>
        <section>
          <span className={step.item}>
            {currentStep}.
          </span>
          <div className={step.question}>
            {this.fillInTemplateFromFormState(question.description)}
          </div>
        </section>
        <section className={step.content}>
          <div className={step.description}>
            {question.helperText}
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

export default connect(mapStateToProps, mapDispatchToProps)(Step);
