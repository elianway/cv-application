import React from "react";

const Button = (props) => {
  const { mode, handleButton } = props;
  let buttonLabel = '';

  mode === 'Submit' ? buttonLabel = 'Edit' : buttonLabel = 'Submit';

  return (
    <div className="btn-container">
      <button id="btn-submit" onClick={handleButton}>{buttonLabel}</button>
    </div>
  );
}

export default Button;