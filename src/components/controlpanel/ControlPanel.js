import React from "react";
import './controlPanel.scss'

import { useSelector, useDispatch } from "react-redux";
import { getNewFriend, sortFriends } from "../../redux/action-creators";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const friends = useSelector(state => state.friends);

  return (
    <div className=" control-panel">
      <span className="title">Get A Friend!</span>
      <button className="control-button" type="button" onClick={() => dispatch(getNewFriend())}>
        Get New Friend
      </button>
      {friends && friends.length > 1 && (
        <button className="control-button" type="button" onClick={() => dispatch(sortFriends())}>
          Sort Friends By Last Name
        </button>
      )}
    </div>
  );
};

export default ControlPanel;
