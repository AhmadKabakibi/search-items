import 'jest-styled-components'
import React from 'react'

// Components
import Search from './Search'

// @ts-ignore
const Component = shallow(<Search />)

describe('Search', () => {
  it('should render a Search Icon', () => {
    expect(Component).toMatchSnapshot()
  })
})
