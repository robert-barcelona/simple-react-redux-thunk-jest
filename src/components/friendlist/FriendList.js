import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './friendList.scss'
import ListFriend from "../listfriend/ListFriend";
import { persistData, retrievePersistedData } from "../../logic";
import { PERSIST_FRIENDS } from "../../helpers/Constants";
import { storeManyFriends } from "../../redux/action-creators";

const FriendList = () => {
  const friends = useSelector(state => state.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    if (friends === null) return;
    const error = persistData(friends, PERSIST_FRIENDS);
    if (error) console.log("error persisting data:", error);
  }, [friends]);

  useEffect(() => {
    const storedFriends = retrievePersistedData(PERSIST_FRIENDS);
    if (storedFriends) {
      dispatch(storeManyFriends(storedFriends));
    }
  }, []);

  return (
    <div className="friend-list">
      <div className="friend-list-inner">{friends &&
      friends.length !== 0 &&
      friends.map(friend => {
        return <ListFriend friend={friend} key={friend.id}/>;
      })}</div>
    </div>
  );
};

export default FriendList;
