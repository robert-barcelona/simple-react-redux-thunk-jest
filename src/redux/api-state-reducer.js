
import {CALLING_API, FINISHED_API_CALL} from "./action-types"

export const initialState = false


function reducer(state = initialState, action) {

  switch (action.type) {

    case FINISHED_API_CALL:
      return false

    case CALLING_API:
      return true

    default:
      return state;
  }
}

export default reducer;
