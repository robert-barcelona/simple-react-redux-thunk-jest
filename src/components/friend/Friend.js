import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faCity,
  faAtlas,
  faPhone,
  faSortNumericUpAlt,
  faAt
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import "./friend.scss";

const Friend = props => {
  const { friend } = props;

  return (
    <div className="card friend-card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <img
                className=" friend-image  is-rounded"
                src={friend.picture.large}
                alt="friend image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title friend-title is-4">
              {friend.name.first} {friend.name.last}
            </p>
            <p className="subtitle friend-subtitle is-6">
              <FontAwesomeIcon icon={faAt} />
              &nbsp;&nbsp;{friend.email}
            </p>
          </div>
        </div>

        <div className="content">
          <p>
            <FontAwesomeIcon icon={faMapPin} />
            &nbsp;&nbsp;Address: {friend.location.street}
          </p>
          <p>
            <FontAwesomeIcon icon={faCity} />
            &nbsp;&nbsp;City: {friend.location.city}
          </p>
          <p>
            <FontAwesomeIcon icon={faAtlas} />
            &nbsp;&nbsp;State: {friend.location.state}
          </p>
          <p>
            <FontAwesomeIcon icon={faSortNumericUpAlt} />
            &nbsp;&nbsp;Postcode: {friend.location.postcode}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;&nbsp;Tel: {friend.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.shape({ first: PropTypes.string, last: PropTypes.string }),
    email: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postcode: PropTypes.number
    }),
    picture:PropTypes.shape({
      large:PropTypes.string,
      medium:PropTypes.string
    })
  })
};

export default Friend;
