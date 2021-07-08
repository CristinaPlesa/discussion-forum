import React from "react";
import Forum from "./Forum";
import PropTypes from "prop-types";

// remove const masterForumList = [ ... ]. We no longer want these.

function ForumList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.forumList.map((forum) =>
        <Forum
          whenForumClicked={props.onForumSelection}
          username={forum.username}
          post={forum.post}
          upvotes={forum.upvotes}
          upvotes={forum.upvotes}
          id={forum.id}
          key={forum.id} />
      )}
    </React.Fragment>
  );
}

ForumList.propTypes = {
  forumList: PropTypes.array,
  onForumSelection: PropTypes.func
};


export default ForumList;