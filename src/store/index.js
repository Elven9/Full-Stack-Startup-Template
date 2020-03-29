import { combineReducers } from 'redux'

// Import Reducer
import route from './reducers/route'

// TODO Get Really Push Route
export const initialState = {
  route: {
    current: "/restaurant"
  }
}

export const rootReducer =  combineReducers(
  {
    route
  }
)

