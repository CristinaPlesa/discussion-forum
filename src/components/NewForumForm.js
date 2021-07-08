import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewForumForm(props) {

  function handleNewForumFormSubmission(event) {
    event.preventDefault();
    props.onNewForumCreation({ userName: event.target.userName.value, post: event.target.post.value, upvotes: event.target.upvotes.value, downvotes: event.target.downvotes.value, id: v4() });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewForumFormSubmission}
        buttonText="Create my post!" />
    </React.Fragment>
  );
}

NewForumForm.propTypes = {
  onNewForumCreation: PropTypes.func
};

export default NewForumForm;