import React from 'react';
import './App.scss';

// Components
import Navigation from './layout/Navigation'
import RouteContainer from './layout/RouteContainer'

function App() {

  return (
    <div className="App">
      <Navigation />
      <RouteContainer />
    </div>
  );
}

export default App;
