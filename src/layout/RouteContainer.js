import React from 'react'

// react-router-dom
import { Route, Switch } from 'react-router-dom'

// pages
import Index from '../pages/Index'

// styles
import styles from './RouteContainer.module.scss'

class RouteContainer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default RouteContainer