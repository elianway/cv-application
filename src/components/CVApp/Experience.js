import React from 'react';
import FormHandler from './formHandler';

const Experience = (props) => {
  const { mode } = props;
  
  
  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-header-text">Experience</h2>
      </div>
      <div className="field-elements">
        <FormHandler fieldName="Company" mode={mode} />
        <FormHandler fieldName="Title" mode={mode} />
        <FormHandler fieldName="Description" mode={mode} />
        <FormHandler fieldName="Date" mode={mode} />
        <FormHandler fieldName="Company" mode={mode} />
        <FormHandler fieldName="Title" mode={mode} />
        <FormHandler fieldName="Description" mode={mode} />
        <FormHandler fieldName="Date" mode={mode} />
        <FormHandler fieldName="Company" mode={mode} />
        <FormHandler fieldName="Title" mode={mode} />
        <FormHandler fieldName="Description" mode={mode} />
        <FormHandler fieldName="Date" mode={mode} />
      </div>
    </div>
  );
}


export default Experience;