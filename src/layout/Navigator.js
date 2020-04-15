import React from 'react'

// React Router Dom
import { useLocation, useHistory } from 'react-router-dom'

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Import Route
import routeList from '../router'

// Styles
import styles from './Navigator.module.scss'

function Navigator(props) {
  const location = useLocation();
  const history = useHistory();

  return (
    <List component="nav" className={styles['container']}>
      {
        routeList.map(route => (
          <ListItem
            button
            selected={ route.path === location.pathname }
            classes={{ root: styles['list-item-root'], selected: styles['list-item-selected'] }}
            key={route.path}
            onClick={() => { if ( location.pathname !== route.path ) history.push(route.path) }}
          >
            <ListItemIcon classes={{ root: styles['list-icon']}}>
              { route.icon }
            </ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
        ))
      }
    </List>
  )
}

export default Navigator