import 'jest-styled-components'
import React from 'react'

import Header from './Header'

describe('Header', () => {
  const Component = shallow(<Header title="test" />)

  it('should render a title', () => {
    expect(Component.find('Header__Title')).toHaveLength(1)
  })

  it('should render a title with custom text', () => {
    Component.setProps({
      title: 'Heya!'
    })
    expect(Component.find('Header__Title').props().children).toBe('Heya!')
  })
})
