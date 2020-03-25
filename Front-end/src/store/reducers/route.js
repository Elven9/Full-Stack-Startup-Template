// Action Type
export const CHANGE_ROUTE = 'CHANGE_ROUTE'

export default function routeReducer (
  state = {
    current: '/'
  },
  action)
{
  switch(action.type) {
    case CHANGE_ROUTE:
      return Object.assign({}, state, action.value)
    default:
      return state
  }
}