import React from "react";
import { useDispatch } from "react-redux";
import Friend from "../friend/Friend";
import { deleteFriend } from "../../redux/action-creators";
import friendPropTypes from "../friend/friendPropTypes"
import './listFriend.scss'

const ListFriend = props => {
  const dispatch = useDispatch();

  const { friend } = props;
  return (
    <div className="list-friend">
      <div>
        <Friend friend={friend} />
      </div>
      <button className="friend-button" type="button" onClick={() => dispatch(deleteFriend(friend))}>
        Delete Friend
      </button>
    </div>
  );
};

ListFriend.propTypes = {
  friend: friendPropTypes
};

export default ListFriend;
