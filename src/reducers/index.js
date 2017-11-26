import { combineReducers } from 'redux';
import libraries from './libraryReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
  libraries,
  selectedLibraryId: selectionReducer
});
