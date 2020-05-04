import formVisibleReducer from './form-visible-reducer';
import memroyListReducer from './memory-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  // masterMemoryList: memoryListReducer,
  // new line of code below
  firestore: firestoreReducer
});

export default rootReducer;
