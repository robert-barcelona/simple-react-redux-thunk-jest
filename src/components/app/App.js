import React from "react";
import "bulma/bulma.sass";
import "../../styles/main.scss";
import "./app.scss";
import ControlPanel from "../controlpanel/ControlPanel";
import FriendList from "../friendlist/FriendList";
import Error from "../error/Error";
import ModalNewFriend from "../modalnewfriend/ModalNewFriend";

const App = () => {
  return (
    <div className="app">
      <ControlPanel />
      <Error />
      <FriendList />
      <ModalNewFriend />
    </div>
  );
};

export default App;
