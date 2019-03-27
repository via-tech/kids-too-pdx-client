import { combineReducers } from 'redux';
import events from './events';
import submit from './SubmitEvent';
import session from './session';

export default combineReducers({
  events,
  submit, 
  session
});
