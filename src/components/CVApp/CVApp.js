import React from 'react'
import styled from 'styled-components'
import General from './General'
import Education from './Education'
import Experience from './Experience'
import Button from '../Utils/Button'

const CVForm = ({
    cv,
    onChangeGeneral,
    onChangeEducation,
    onAddEducation,
    onDeleteEducation,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    onReset,
    onSubmit,
}) => {
    return (
        <CVFormWrapper>
            <General personalInfo={cv.personalInfo} onChange={onChangeGeneral} />
            <Experience
                experience={cv.experience}
                onChange={onChangeExperience}
                onAdd={onAddExperience}
                onDelete={onDeleteExperience}
            />
            <Education 
                education={cv.education}
                onChange={onChangeEducation}
                onAdd={onAddEducation}
                onDelete={onDeleteEducation}
            />
            <>
                <Button text="Submit" onClick={onSubmit} green></Button>
                <Button text="Reset" onClick={onReset} red></Button>
            </>
        </CVFormWrapper>
    );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default CVForm;
