import axios from "axios";

import {
  CACHE_NEW_FRIEND,
  CLEAR_NEW_FRIEND,
  ADD_FRIEND,
  STORE_FRIEND,
  DELETE_FRIEND,
  ERROR,
  CALLING_API,
  FINISHED_API_CALL,
  SORT_FRIENDS_BY_NAME, STORE_MANY_FRIENDS
} from "./action-types";

import {logicGetFriend, persistData} from "../logic";
import {PERSIST_FRIENDS} from "../helpers/Constants";

export const sortFriends = () => ({type: SORT_FRIENDS_BY_NAME});
export const callingAPI = () => ({type: CALLING_API});
export const finishedAPICall = () => ({type: FINISHED_API_CALL});
export const error = message => ({type: ERROR, data: message});
export const deleteFriend = friend => ({type: DELETE_FRIEND, data: friend});
export const clearNewFriend = () => ({type: CLEAR_NEW_FRIEND});
export const storeNewFriend = friend => ({type: STORE_FRIEND, data: friend});
export const storeManyFriends = friends => ({type: STORE_MANY_FRIENDS, data: friends});

export const cacheNewFriend = friend => ({
  type: CACHE_NEW_FRIEND,
  data: friend
});

export const addFriend = friend => (dispatch) => {
  dispatch(clearNewFriend());
  dispatch(storeNewFriend(friend));
//  const errorMessage = persistData(getState().friends, PERSIST_FRIENDS);
  // if (errorMessage !== "") dispatch(error(errorMessage));
};

export const getNewFriend = () => async dispatch => {
  try {
    dispatch(callingAPI());
    const friendData = await logicGetFriend();
    if (!friendData) throw new Error("Friend was not retrieved from API");
    dispatch(finishedAPICall());
    dispatch(cacheNewFriend(friendData));
  } catch (e) {
    dispatch(error(e.message));
  }
};
