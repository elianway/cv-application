import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>CV BUILDER</h1>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
`

const HeaderWrapper = styled.div`
  font-family: 'Roboto', bold;
  display: flex;
  justify-content: center;
  max-width: 1800px;
  padding: 3rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.2rem;
`

export default Header;