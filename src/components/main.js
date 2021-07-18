import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import CVForm from './CVForm'
import emptyCV from './Utils/emptyCV'

const main = () => {
  const [ cv, setCv ] = useState(emptyCV)

  const handleChangeGeneral = (e) => {
    const { name, id, type } = e.target

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }))
  }

  const handleChangeFile = (e) => {

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

  const handleDeleteExperience = (e, id) => {
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
    setCv(emptyCv)
  }

  return (

  )
}

export default main;