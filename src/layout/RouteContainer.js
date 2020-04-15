import React from 'react'

// react-router-dom
import { Route, Switch } from 'react-router-dom'

// components
import Navigator from './Navigator'

// Import Route
import routeList from '../router'

// styles
import styles from './RouteContainer.module.scss'

function RouteContainer(props) {
  return (
    <div className={styles.container}>
      <div className={styles['route-selector']}>
        <Navigator />
      </div>
      <div className={styles['route-container']}>
        <Switch>
          {
            routeList.map(route => (
              <Route exact path={route.path} key={route.path}>
                {route.component}
              </Route>
            ))
          }
        </Switch>
      </div>
    </div>
  )
}

export default RouteContainer