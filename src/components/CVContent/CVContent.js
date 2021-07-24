import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

class CVContent extends Component {
  render() {
    const { cv, onSubmit, onReset, onPrint } = this.props;

    return (
    <CVContentWrapper>
      <Header personalInfo={cv.personalInfo} />
      <Content
        personalInfo={cv.personalInfo}
        experience={cv.experience}
        education={cv.education}
        onSubmit={onSubmit}
        onReset={onReset}
        onPrint={onPrint}
      />
      <Sidebar personalInfo={cv.personalInfo} />
    </CVContentWrapper>
    );
  };
};

export default CVContent;

const CVContentWrapper = styled.div`
  width: 210mm;
  height: 297mm;
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: 150mm 60mm;
  grid-template-rows: 35mm 262mm;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;