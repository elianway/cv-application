import React from 'react';
import styled from 'styled-components';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

const Content = ({ personalInfo, experience, education, onSubmit, onReset }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <ContentWrapper>
      <Section title="Description" contrastTitle>
        <Description>{personalInfo.description}</Description>
      </Section>
      <Section title="Experience" direction="column" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Education" direction="column" contrastTitle>
        {educationItems}
      </Section>
      <ButtonContainer>
        <ButtonWrapper>
          <Button text="Edit" onClick={onSubmit} green />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button text="Reset" onClick={onReset} red />
        </ButtonWrapper>
      </ButtonContainer>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Description = styled.div`
  font-style: italic;
`;

const ButtonWrapper = styled.div`
  padding 1.6rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 18rem;
  position: absolute;
  bottom: 0;
`;

export default Content;