import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditForumForm(props) {
  const { forum } = props;

  function handleEditForumFormSubmission(event) {
    event.preventDefault();
    props.onEditForum({ name: event.target.username.value, post: event.target.post.value, upvotes: event.target.upvotes.value, downvotes: event.target.downvotes.value, id: forum.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditForumFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditForumForm.propTypes = {
  onEditForum: PropTypes.func
};

export default EditForumForm;