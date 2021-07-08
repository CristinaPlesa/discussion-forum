import * as c from "./../actions/ActionTypes";

export const deleteForum = (id) => ({
  type: c.DELETE_FORUM,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const addForum = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id,
  };
};