import React from 'react'
import styled from 'styled-components'

const ImagePreview = ({ userImage }) => {
  return (
    <PhotoContainer>
      <PhotoWrapper>
        <Photo src={userImage} />
      </PhotoWrapper>
    </PhotoContainer>
  )
}

const Photo = styled.img`
  margin-bottom: 2rem;
`

const PhotoWrapper = styled.div`
  width: 55mm;
`
const PhotoContainer = styled.div`
  width: 100%
  display: flex;
  margin: 0 auto;
`

export default ImagePreview