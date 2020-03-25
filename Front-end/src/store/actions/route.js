import { CHANGE_ROUTE } from '../reducers/route'

export const changeRoute = (value) => {
  return {
    type: CHANGE_ROUTE,
    value
  }
}