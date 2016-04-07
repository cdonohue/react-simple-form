import React, { Component } from "react";
import { applyContainerQuery } from "react-container-query";
import classnames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from "./actions";

import simpleForm from "./SimpleForm.css";
import Step from "./components/Step";

const mapStateToProps = (state) => ({
  currentStep: state.form.currentStep
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

class SimpleForm extends Component {
  constructor() {
    super();

    this.renderQuestion = this.renderQuestion.bind(this);
  }

  renderQuestion(step) {
    const { questions = [], currentStep } = this.props;
    const currentQuestion = questions[currentStep - 1];

    return (
      <Step question={currentQuestion} isActive={currentStep === step} />
    )
  }

  render() {
    const { containerQuery, currentStep } = this.props;

    return (
      <section className={classnames(simpleForm.questions, containerQuery)}>
        {this.renderQuestion(currentStep)}
      </section>
    );
  }
}

const query = {
  [simpleForm.small]: {
    maxHeight: 450,
  },

  [simpleForm.large]: {
    minHeight: 450,
  }
}

export default applyContainerQuery(
  connect(mapStateToProps, mapDispatchToProps)(SimpleForm),
  query,
);
