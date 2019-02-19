import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

interface IProps {
  children: string
  name: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({ children, name, onChange }: IProps) => {
  return (
    <Container>
      <Input type="checkbox" name={name} onChange={onChange} />
      <Marker />
      <Label>{children}</Label>
    </Container>
  )
}

export default Checkbox

const Container = styled.label`
  position: relative;
  align-items: center;
  display: inline-flex;
  color: ${colors.black};
  cursor: pointer;
`

const Marker = styled.span`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 16px;
  height: 16px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.lightGray};
`

const Label = styled.span`
  display: inline-block;
  margin-left: 1rem;
`

const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked {
    + ${Marker} {
      background: ${colors.blueSky};
      box-shadow: inset 0 0 0 2px ${colors.lightGray};
    }
  }
`
