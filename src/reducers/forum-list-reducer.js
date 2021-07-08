import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { username, post, upvotes, downvotes, id } = action;
  switch (action.type) {
    case c.ADD_FORUM:
      return Object.assign({}, state, {
        [id]: {
          userName: username,
          post: post,
          upvotes: upvotes,
          downvotes: downvotes,
          id: id,
        },
      });
    case c.DELETE_FORUM:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};