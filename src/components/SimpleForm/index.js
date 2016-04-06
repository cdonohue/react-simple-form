import React, { Component } from "react";
import PubSub from "pubsub-js";

import simpleForm from "./SimpleForm.css";
import createStep from "./components/Step";

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      form: {},
    };
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe('STATE_UPDATE', this.handleSubscribe);
  }

  handleSubscribe(type, state) {
    this.setState(state);
  }

  renderQuestion(step) {
    const { questions = [] } = this.props;
    const { currentStep } = this.state;
    const currentQuestion = questions[currentStep - 1];
    const Step = createStep(React);

    return (
      <Step state={this.state} question={currentQuestion} isActive={currentStep === step} />
    )
  }

  render() {
    const { currentStep } = this.state;

    return (
      <section className={simpleForm.questions}>
        {this.renderQuestion(currentStep)}
      </section>
    );
  }
}

export default SimpleForm;
