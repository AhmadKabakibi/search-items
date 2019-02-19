import 'jest-styled-components'
import React from 'react'

import Checkbox from './checkbox'

describe('Checkbox', () => {
  const Component = shallow(
    <Checkbox name={'test'} onChange={jest.fn()}>
      {'checkbox label'}
    </Checkbox>
  )
  it('should render a Checkbox', () => {
    expect(Component).toMatchSnapshot()
  })
})
