import {
  STORE_FRIEND,
  DELETE_FRIEND,
  SORT_FRIENDS_BY_NAME, STORE_MANY_FRIENDS
} from "./action-types";
import sort_friends_by_name from "../utils/sort_friends_by_name";

export const initialState = null;

let friends;

/**
 *
 * Note: the checking for null the reducer and non-standard returns
 * is due to the fact that the initial state is null, not []
 * This is to make loading from localStorage through hooks possible,
 * that is, to be able to distinguish between an empty state []
 * and a non-loaded state, null
 *
 * @param state
 * @param action
 * @returns {*[]|this|null|*[]|*}
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case SORT_FRIENDS_BY_NAME:
      if (state === null) return null
      friends = [...state];
      return friends.sort(sort_friends_by_name);

    case STORE_MANY_FRIENDS:
      return action.data

    case STORE_FRIEND:
      if (state === null) return [action.data]
      return [...state, action.data];

    case DELETE_FRIEND:
      if (state === null) return null
      return state.filter(friend => friend !== action.data);

    default:
      return state;
  }
}

export default reducer;
