import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Route, Switch } from 'react-router'
import { IRoute, IRoutes } from './constants/routes'

// Styling
import GlobalStyle from './styles'

// Types
interface IProps {
  routes: IRoutes
}

export const AppRoute = (route: IRoute) => (
  <Route path={route.path} render={props => <route.component {...props} />} />
)

const App = ({ routes }: IProps) => (
  <Fragment>
    <Helmet title="App" />
    <Switch>
      {routes.map((route: IRoute, i: number) => {
        // Only pass allowed route props to Route component
        const { ...routeProps } = route
        return <AppRoute key={i} {...routeProps} />
      })}
    </Switch>
    <GlobalStyle />
  </Fragment>
)

export default App
