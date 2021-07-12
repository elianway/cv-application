import React from "react";

const Form = (props) => {
  const { fieldName, input, handleInput } = props;
  return (
    <div>
      <form>
        <label htmlFor="fieldInput">{ {fieldName} + ": " }</label>
        <input
          onChange={handleInput}
          value={input}
          type="text"
          id="taskInput"/>
      </form>
    </div>
  );
};

export default Form;