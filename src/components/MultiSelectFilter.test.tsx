import 'jest-styled-components'
import React from 'react'

// Components
import MultiSelectFilter from './MultiSelectFilter'

// @ts-ignore
const Component = shallow(<MultiSelectFilter data={['foo', 'bar']} />)

describe('MultiSelectFilter', () => {
  it('should render a MultiSelectFilter', () => {
    expect(Component).toMatchSnapshot()
  })
})
