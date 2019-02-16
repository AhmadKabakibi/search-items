import { ComponentType } from 'react'

// Pages
import HomePage from '../components/pageTypes/Home'

interface IPaths {
  [key: string]: string
}

export interface IRoute {
  path: string
  title: string
  component: ComponentType<any>
  exact?: boolean
}

export interface IRoutes extends Array<IRoute> {}

export const paths: IPaths = {
  main: '/',
  pageNotFound: '*'
}

const routes: IRoutes = [
  {
    component: HomePage,
    exact: true,
    path: paths.home,
    title: 'Home Page'
  }
]

export default routes
