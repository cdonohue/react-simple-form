import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import finalStep from "./FinalStep.css";

const mapStateToProps = (state) => ({
  name: state.form.data.name,
})

class FinalStep extends Component {
  render() {
    const { name } = this.props;

    return (
      <section className={classnames(finalStep.container, finalStep.rollIn)}>
        <div className={finalStep.content}>
          <div className={finalStep.heading}>
            <span className={finalStep.title}>Thanks, brah!</span>
            <span className={classnames(finalStep.checkmark, finalStep.zoomIn)}></span>
          </div>
          <div className={finalStep.description}>
            Why not take a look at some schools that we think you might be fit for?
          </div>
          <button className={finalStep.button}>Show <strong>42</strong> schools</button>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(FinalStep);
