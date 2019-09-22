import { CACHE_NEW_FRIEND, CLEAR_NEW_FRIEND } from "./action-types";

export const initialState = null;


function reducer(state = initialState, action) {
  switch (action.type) {
    case CACHE_NEW_FRIEND:
      return action.data;

    case CLEAR_NEW_FRIEND:
      return initialState;

    default:
      return state;
  }
}

export default reducer;
