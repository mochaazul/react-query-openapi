import { RootRoute, Route, RouteOptions } from '@tanstack/react-router';

import Home from '../pages/Home';
import App from '../App';
import Login from '../pages/Login';


const rootRoute = new RootRoute({
  component: App,
})

const routes:RouteOptions[] = [
  {
    getParentRoute : () => rootRoute,
    path: '/',
    component: Home
  },
  {
    getParentRoute : () => rootRoute,
    path: '/login',
    component: Login
  },
]



const routeMap = routes.map(options => (new Route(options)))

const routeTree = rootRoute.addChildren(routeMap)

export default routeTree