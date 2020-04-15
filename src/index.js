import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import { rootReducer, initialState } from './store/index'

// const store = createStore(rootReducer, initialState)

// For Debugger Purpose
// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  // <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  // </Provider>,
  ,document.getElementById('root')
);
