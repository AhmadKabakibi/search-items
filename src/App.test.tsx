import React from 'react'
import App, { AppRoute } from './App'
import { IRoute, IRoutes } from './constants/routes'

describe('App:AppRoute', () => {
  it('should provide a working AppRoute', () => {
    const MockHome = () => {
      return <div />
    }
    const mockRoute: IRoute = {
      component: MockHome,
      exact: false,
      path: '/',
      title: 'testroute'
    }
    const Component = shallow(<AppRoute {...mockRoute} />)
    expect(Component.name()).toBe('Route')
    expect(Component.props().path).toBe(mockRoute.path)
    const RouteComponent = Component.props().render({ test: true })
    expect(RouteComponent.props).toHaveProperty('test', true)
  })
})

describe('App', () => {
  const MockRoute = () => {
    return <div />
  }
  const MockRoute2 = () => {
    return <div />
  }
  const mockRoutes: IRoutes = [
    {
      component: MockRoute,
      path: '/',
      title: 'testroute'
    },
    {
      component: MockRoute2,
      path: '/route',
      title: 'testroute2'
    }
  ]

  const Component = shallow(<App routes={mockRoutes} />)
  it('should provide an app without a wrapper component', () => {
    expect(Component.name()).toBe('Fragment')
  })

  it('should set head tags with react-helmet', () => {
    expect(Component.find('HelmetWrapper').props()).toHaveProperty('title')
  })

  it('should render route components', () => {
    expect(Component.find('Switch').children().length).toBe(mockRoutes.length)
    expect(
      Component.find('Switch')
        .children()
        .get(1).props.path
    ).toBe(mockRoutes[1].path)
  })

  it('should set the global styles', () => {
    expect(Component.find('GlobalStyleComponent')).toHaveLength(1)
  })
})
