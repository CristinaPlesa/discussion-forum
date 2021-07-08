import formVisibleReducer from './form-visible-reducer';
import forumListReducer from './forum-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterFourmList: forumListReducer
});

export default rootReducer;