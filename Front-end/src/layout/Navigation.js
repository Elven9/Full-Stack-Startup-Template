import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

// Material UI
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

// Redux
import { connect } from 'react-redux'
import { changeRoute } from '../store/actions/route'

// Style
import styles from './Navigation.module.scss'

function Navigation({ path, onChange }) {
  const history = useHistory()

  return (
    <div className={styles.container}>
      <h1>AVL Takehome Test</h1>
      <BottomNavigation
        value={path}
        onChange={(_, newValue) => {
          onChange(newValue)
          history.push(newValue)
        }}
        showLabels
        className={styles["bottom-navigation"]}
      >
        <BottomNavigationAction classes={{selected: styles["custom-selected"], root: styles["custom-root"]}} label="Recents" value="/" icon={<RestoreIcon />} />
        <BottomNavigationAction classes={{selected: styles["custom-selected"], root: styles["custom-root"]}} label="Favorites" value="/Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction classes={{selected: styles["custom-selected"], root: styles["custom-root"]}} label="Nearby" value="/Nearby" icon={<LocationOnIcon />} />
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