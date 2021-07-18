import React from 'react';

const HtmlElement = (props) => {
  const { fieldName, input } = props;
  return (
    <div className="element-container">
      <p className="element">{ fieldName + ": " + input }</p>
    </div>
  );
};

export default HtmlElement;