import React from 'react'

// Redux
import { connect } from 'react-redux'
import { changeRoute } from '../store/actions/route'

// Style
import styles from './Navigation.module.scss'

function Navigation({ path, onChange }) {
  return (
    <div className={styles.container}>
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