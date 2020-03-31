import React, { useState } from 'react';
import './App.scss';

// React Router Dom
import { useLocation } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { changeRoute } from './store/actions/route'

// Components
import Navigation from './layout/Navigation'
import RouteContainer from './layout/RouteContainer'

function App() {
  const [didMount, setDidMount] = useState(false)
  const location = useLocation();
  const dispatch = useDispatch();

  if (!didMount) {
    dispatch(changeRoute({current: location.pathname}))
    setDidMount(true)
  }

  return (
    <div className="App">
      <Navigation />
      <RouteContainer />
    </div>
  );
}

export default App;
