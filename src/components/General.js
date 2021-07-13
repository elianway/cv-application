import React from 'react';
import FormHandler from './formHandler';
import Headshot from './Headshot';

const General = (props) => {
  const { mode } = props;
  
  
  return (
    <div className="section-block">
      <Headshot />
      <div className="section-header">
        <h2 className="section-header-text">General</h2>
      </div>
      <div className="field-elements">
        <FormHandler fieldName="Name" mode={mode} />
        <FormHandler fieldName="Email" mode={mode} />
        <FormHandler fieldName="Phone" mode={mode} />
      </div>
    </div>
  );
}


export default General;