import React from 'react'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import colors from '../../styles/colors'
import textStyles from '../../styles/textStyles'

// Components
import Button from '../Button'
import Header from '../Header'

import logo from './logo.svg'

const Home = () => (
  <Wrapper>
    <Helmet title="Home" />
    <Header title="Header" color={colors.creamy} />
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Copy>React App with TypeScript</Copy>
        <Button
          onClick={() => {
            alert('Ochh youuu :P ')
          }}
        >
          Do action
        </Button>
      </AppHeader>
    </App>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const App = styled.div`
  text-align: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`
const Copy = styled.p`
  ${textStyles.title};
  color: ${colors.black};
`
const AppHeader = styled.header`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 100vh;
  background-color: ${colors.white};
  color: white;
  font-size: 1.4em;
`
export default Home
