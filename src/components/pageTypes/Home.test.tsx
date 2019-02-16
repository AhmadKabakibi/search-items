import 'jest-styled-components'
import React from 'react'

// Components
import Home from './Home'

const Component = shallow(<Home />)

describe('Home', () => {
  it('should render a Header', () => {
    expect(Component.find('Header')).toHaveLength(1)
  })
})

describe('Home:Button', () => {
  const Button = Component.find('Button')

  it('should render an action button', () => {
    expect(Button).toHaveLength(1)
  })
})
