import confirm from "./Confirm.css";

const Confirm = React => ({ buttonText, label, onConfirm }) => (
  <div className={confirm.container}>
    <button className={confirm.button} onClick={onConfirm}>
      {buttonText}
    </button>
    <label className={confirm.label}>
      {label}
    </label>
  </div>
);

export default Confirm;
