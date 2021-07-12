import React from 'react';

const HtmlElement = (props) => {
  const { fieldName, input } = props;
  return (
    <div>
      <h3 className="field-element">{ {fieldName} + ": " + {input} }</h3>
    </div>
  );
};

export default HtmlElement;