import { userER_CHANGE } from '../constants'
const initialState = {
  user: 0
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userER_CHANGE:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
export default userReducer
