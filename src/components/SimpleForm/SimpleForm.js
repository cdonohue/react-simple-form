import React, { Component } from "react";
import { applyContainerQuery } from "react-container-query";
import classnames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from "./actions";

import simpleForm from "./SimpleForm.css";
import Step from "./components/Step";
import FinalStep from "./components/FinalStep";
import Progress from "./components/Progress";

const mapStateToProps = (state) => ({
  currentStep: state.form.currentStep,
  formData: state.form.data,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

class SimpleForm extends Component {
  constructor() {
    super();

    this.calculatePercentageCompletion = this.calculatePercentageCompletion.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  renderQuestion() {
    const { questions = [], currentStep } = this.props;
    const currentQuestion = questions[currentStep - 1];

    if (currentQuestion) {
      return (
        <Step question={currentQuestion} />
      )
    }

    return <FinalStep />
  }

  calculatePercentageCompletion() {
    const { questions, currentStep } = this.props;

    return currentStep / (questions.length + 1) * 100;
  }

  render() {
    const { containerQuery, currentStep, formData } = this.props;

    return (
      <div className={simpleForm.wrapper}>
        <section className={classnames(simpleForm.questions, containerQuery)}>
          {this.renderQuestion()}
        </section>
        <div className={simpleForm.progress}>
          <Progress percentage={this.calculatePercentageCompletion()} />
        </div>
      </div>
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
