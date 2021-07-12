import React from 'react';

const HtmlElement = (props) => {
  const { fieldName, input } = props;
  return (
    <div>
      <p className="field-element">{ fieldName + ": " + input }</p>
    </div>
  );
};

export default HtmlElement;