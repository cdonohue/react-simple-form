import React from "react";
import confirm from "./Confirm.css";

const Confirm = ({ buttonText, label, handleConfirm }) => (
  <div className={confirm.container}>
    <button className={confirm.button} onClick={handleConfirm}>
      {buttonText}
    </button>
    <label className={confirm.label}>
      {label}
    </label>
  </div>
);

export default Confirm;
