import React from "react";
import PropTypes from "prop-types";

function Forum(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenForumClicked(props.id)}>
        <h3>{props.userName}</h3>
        <p><em>{props.post}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Forum.propTypes = {
  userName: PropTypes.string,
  post: PropTypes.string,
  upvotes: PropTypes.string,
  downvotes: PropTypes.string,
  id: PropTypes.string,
  whenForumClicked: PropTypes.func
};

export default Forum;