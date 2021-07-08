import { connect } from "react-redux";
import React from "react";
import NewForumForm from "./NewForumForm";
import ForumList from "./ForumList";
import ForumDetail from "./ForumDetail";
import EditForumForm from "./EditForumForm";
import PropTypes from "prop-types";
import * as a from "./../actions";

class ForumControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedForum: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedForum != null) {
      this.setState({
        selectedForum: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingNewForumToList = (newForum) => {
    const { dispatch } = this.props;
    const action = a.addForum(newForum);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedForum = (id) => {
    const selectedForum = this.props.masterForumList[id];
    this.setState({ selectedForum: selectedForum });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingForumInList = (forumToEdit) => {
    const { dispatch } = this.props;
    const action = a.addForum(forumToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedForum: null,
    });
  };

  handleDeletingForum = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteForum(id);
    dispatch(action);
    this.setState({ selectedForum: null });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditForumForm
          forum={this.state.selectedForum}
          onEditForum={this.handleEditingForumInList}
        />
      );
      buttonText = "Return to Forum List";
    } else if (this.state.selectedForum != null) {
      currentlyVisibleState = (
        <ForumDetail
          forum={this.state.selectedForum}
          onClickingDelete={this.handleDeletingForum}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Forum List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewForumForm onNewForumCreation={this.handleAddingNewForumToList} />
      );
      buttonText = "Return to Forum List";
    } else {
      currentlyVisibleState = (
        <ForumList
          forumList={this.props.masterForumList}
          onForumSelection={this.handleChangingSelectedForum}
        />
      );
      buttonText = "Add Forum";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ForumControl.propTypes = {
  masterForumList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    masterForumList: state.masterForumList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;