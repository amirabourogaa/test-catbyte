import { userER_CHANGE } from '../constants'
export function changeuser (user) {
  return {
    type: userER_CHANGE,
    payload: user
  }
}
