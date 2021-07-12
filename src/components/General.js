import React from 'react';
import FormHandler from './formHandler';
import Headshot from './Headshot';

const General = (props) => {
  const { mode } = props;
  
  
  return (
    <div>
      <Headshot />
      <div className="section-header">
        <h2 className="section-header-text">General</h2>
      </div>
      <div className="element-container">
        <FormHandler fieldName="Name" mode={mode} />
        <FormHandler fieldName="Email" mode={mode} />
        <FormHandler fieldName="Phone" mode={mode} />
      </div>
    </div>
  );
}


export default General;