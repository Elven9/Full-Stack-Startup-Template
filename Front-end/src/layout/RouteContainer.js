import React from 'react'

// react-router-dom
import { Route, Switch } from 'react-router-dom'

// pages
import Restaurant from '../pages/Restaurant'

// styles
import styles from './RouteContainer.module.scss'

class RouteContainer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route exact path="/restaurant">
            <Restaurant />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default RouteContainer