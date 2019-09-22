
import {CALLING_API, GET_NEW_FRIEND_SUCCESS, FINISHED_API_CALL} from "./action-types"

export const initialState = false


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_NEW_FRIEND_SUCCESS:
    case FINISHED_API_CALL:
      return false

    case CALLING_API:
      return true

    default:
      return state;
  }
}

export default reducer;
