import React from 'react'

// Material UI Icon
import InboxIcon from '@material-ui/icons/Inbox';

// Page
import Index from './pages/Index'

export default [
  {
    name: "Index Page",
    path: "/",
    icon: <InboxIcon />,
    component: <Index />
  }
]