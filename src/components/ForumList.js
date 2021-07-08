import React from "react";
import PropTypes from "prop-types";
import Forum from "./Forum";

function ForumList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.forumList).map((forum) => (
        <Forum
          whenForumClicked={props.onForumSelection}
          names={forum.names}
          location={forum.location}
          issue={forum.issue}
          formattedWaitTime={forum.formattedWaitTime}
          id={forum.id}
          key={forum.id}
        />
      ))}
    </React.Fragment>
  );
}

ForumList.propTypes = {
  ForumList: PropTypes.object,
  onForumSelection: PropTypes.func,
};

export default ForumList;