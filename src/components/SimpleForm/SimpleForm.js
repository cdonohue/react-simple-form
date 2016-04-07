import React, { Component } from "react";
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
    const { currentStep } = this.props;

    return (
      <section className={simpleForm.questions}>
        {this.renderQuestion(currentStep)}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);
