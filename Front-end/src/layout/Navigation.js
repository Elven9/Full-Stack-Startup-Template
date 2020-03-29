import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

// Material UI
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import AssessmentIcon from '@material-ui/icons/Assessment'

// Redux
import { connect } from 'react-redux'
import { changeRoute } from '../store/actions/route'

// Style
import styles from './Navigation.module.scss'

function Navigation({ path, onChange }) {
  const history = useHistory()

  return (
    <div className={styles.container}>
      <h1>餐廳營業系統</h1>
      <BottomNavigation
        value={path}
        onChange={(_, newValue) => {
          onChange(newValue)
          history.push(newValue)
        }}
        showLabels
        classes={{root: styles["bottom-navigation"]}}
      >
        <BottomNavigationAction classes={{selected: styles["custom-selected"], root: styles["custom-root"]}} label="現在營業餐廳" value="/restaurant" icon={<RestaurantIcon />} />
        <BottomNavigationAction classes={{selected: styles["custom-selected"], root: styles["custom-root"]}} label="餐廳管理系統" value="/dashboard" icon={<AssessmentIcon />} />
      </BottomNavigation>
    </div>
  )
}

const mapStateToProps = (state, _) => {
  return {
    path: state.route.current
  }
}

const mapDispatchToProps = (dispatch, _) => {
  return {
    onChange: value => dispatch(changeRoute({current: value}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)