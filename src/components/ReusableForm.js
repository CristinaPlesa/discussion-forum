import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          userName='name'
          placeholder='Name' />
        <input
          type='hidden'
          name='upvotes'
          value='0' />
        <input
          type='hidden'
          name='downvotes'
          value='0' />
        <textarea
          name='post'
          placeholder='Post something' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;