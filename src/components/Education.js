import React from 'react';
import FormHandler from './formHandler';

const Education = (props) => {
  const { mode } = props;
  
  return (
    <div>
      <div className="section-header">
        <h2 className="section-header-text">Education</h2>
      </div>
      <div className="element-container">
        <FormHandler fieldName="School Name" mode={mode} />
        <FormHandler fieldName="Major" mode={mode} />
        <FormHandler fieldName="Date" mode={mode} />
        <FormHandler fieldName="School Name" mode={mode} />
        <FormHandler fieldName="Major" mode={mode} />
        <FormHandler fieldName="Date" mode={mode} />
      </div>
    </div>
  );
}


export default Education;