import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Friend from "../friend/Friend";
import { addFriend, clearNewFriend } from "../../redux/action-creators";

const NewFriend = () => {
  const newFriendCache = useSelector(state => state.newFriendCache);
  const dispatch = useDispatch();

  if (newFriendCache) {
    return (
      <div>
        <div>
          <Friend friend={newFriendCache} />
        </div>
        <button
          type="button"
          onClick={() => dispatch(addFriend(newFriendCache))}
        >
          Add Friend
        </button>
        <button
          type="button"
          onClick={() => dispatch(clearNewFriend(newFriendCache))}
        >
          Cancel
        </button>
      </div>
    );
  } else return null;
};

export default NewFriend;
