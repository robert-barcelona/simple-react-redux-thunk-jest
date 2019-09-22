import { combineReducers } from "redux";

// reducers
import apiState from "./api-state-reducer.js";
import newFriendCache from "./new-friend-reducer";
import friends from "./friends-reducer";
import errorMessage from "./error-message-reducer";

export const originalState = {
  apiState: { isLoading: false },
  errorMessage: "",
  friends: null,
  newFriendCache: null
};

const rootReducer = combineReducers({
  apiState,
  friends,
  errorMessage,
  newFriendCache
});

export default rootReducer;
