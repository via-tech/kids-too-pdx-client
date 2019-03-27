import { combineReducers } from 'redux';
import session from './session';
import events from './events';

export default combineReducers({
  events,
  session
});
