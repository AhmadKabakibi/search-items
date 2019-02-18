import 'jest-styled-components'
import React from 'react'
import axios from 'axios'

// Components
import Home from './Home'

// @ts-ignore
const Component = shallow(<Home />)
Component.setState({ dataJSON: ['foo', 'bar'] })

describe('Home', () => {
  it('should render a Home', () => {
    expect(Component).toMatchSnapshot()
  })
  it('should render a Header', () => {
    expect(Component.find('Header')).toHaveLength(1)
  })
})

it('should async fetch data in componentDidMount', () => {
  axios.get = jest.fn().mockImplementation(() => {
    return new Promise(resolve => {
      resolve({
        data: ['foo']
      })
    })
  })
  // @ts-ignore
  const renderedComponent = shallow(<Home />)
  const instance: any = renderedComponent.instance()
  const promise = instance.componentDidMount()

  return promise.then(() => {
    expect(renderedComponent.state('dataJSON')).toBe('foo')
  })
})

describe('Home:MultiSelectFilter', () => {
  const MultiSelectFilter = Component.find('MultiSelectFilter')
  it('should render an action button', () => {
    expect(MultiSelectFilter).toHaveLength(1)
  })
})
