import React from "react";
import PropTypes from "prop-types";

function ForumDetail(props) {
  const { forum, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h1>Forum Detail</h1>
      <h3>{forum.userName}</h3>
      <p><em>{forum.post}</em></p>
      <p><em>{forum.upvotes}</em></p>
      <p><em>{forum.downvotes}</em></p>
      <button onClick={() => onClickingDelete(forum.id)}>Close Forum</button> { /* new code */}
      <hr />
    </React.Fragment >
  );
}

ForumDetail.propTypes = {
  forum: PropTypes.object,
  onClickingDelete: PropTypes.func // new code
};

export default ForumDetail;