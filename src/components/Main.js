import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import CVApp from './CVApp'
import emptyCV from './Utils/emptyCV'
import CVContent from './CVContent'

const Main = () => {
  const [ cv, setCv ] = useState(emptyCV)

  const handleChangeGeneral = (e) => {
    const { name, value, type } = e.target

    if (type === 'file') {
      handleChangeFile(e)
      return
    }

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }))
  }

  const handleChangeFile = (e) => {
    const { name } = e.target
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newEducation = prevState.education.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value }
        }
        return item
      })
      return { ...prevState, education: [...newEducation] }
    })

  }

  const handleAddEducation = (e) => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }))
  }

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (item) => item.id !== id
      )
        return { ...prevState, education: [...newEducation] }
    })
  }

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newExperience = prevState.experience.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value }
        }
        return item
      })
      return { ...prevState, experience: [...newExperience] }
    })
  }

  const handleAddExperience = (e) => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }))
  }

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (item) => item.id !== id
      )
      return { ...prevState, experience: [...newExperience] }
    })
  }

  const handleSubmit = () => {
    setCv((prevState) => ({
      ...prevState,
      edit: toggleEdit(),
    }))
  }

  const toggleEdit = () => {
    if (cv.edit === true) {
      return false
    } else return true
  }

  const handleReset = () => {
    setCv(emptyCV)
  }

  if (cv.edit === true) { 
    return (
      <MainWrapper>
        <CVApp
        cv={cv}
        onChangeGeneral={handleChangeGeneral}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onReset={handleReset}
        onSubmit={handleSubmit}
      />
    </MainWrapper>
      )
    } else return (
      <MainWrapper>
        <CVContent
        cv={cv}
        onSubmit={handleSubmit}
        onReset={handleReset}
        />
      </MainWrapper>
    )
}

export default Main;

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;
