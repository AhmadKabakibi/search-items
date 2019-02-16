import React from 'react'

// Styling
import styled from 'styled-components'

interface IProps {
  title: string
  color?: string
}

const Header = ({ title, color }: IProps) => {
  return (
    <Container>
      <Title color={color}>{title}</Title>
    </Container>
  )
}

export default Header

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
`

export const Title = styled.h1`
  width: 100%;
  color: ${props => props.color};
  font-size: 36px;
  line-height: 52px;
`
