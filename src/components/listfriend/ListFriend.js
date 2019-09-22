import React from "react";
import { useDispatch } from "react-redux";
import Friend from "../friend/Friend";
import { deleteFriend } from "../../redux/action-creators";
import PropTypes from "prop-types";
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
  friend: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
};

export default ListFriend;
