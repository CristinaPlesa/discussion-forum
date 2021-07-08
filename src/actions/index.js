import * as c from "./../actions/ActionTypes";

export const deleteForum = (id) => ({
  type: c.DELETE_FORUM,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const addForum = (forum) => {
  const { username, post, upvote, downvote, id } = forum;
  return {
    type: c.ADD_FORUM,
    username: username,
    post: post,
    upvote: upvote,
    downvote: downvote,
    id: id,
  };
};