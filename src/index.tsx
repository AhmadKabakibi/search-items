import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

// Utils
import routes from './constants/routes'

// Components
import App from './App'

const history = createBrowserHistory()

export const WrappedApp = (
  <Router history={history}>
    <App routes={routes} />
  </Router>
)

export const init = (el: HTMLElement | null) => {
  if (el) {
    ReactDOM.render(WrappedApp, el)
  }
}

init(document.getElementById('root'))
