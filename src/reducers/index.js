import { combineReducers } from 'redux';
import events from './events';
import event from './eventDetail';
import submit from './SubmitEvent';
import session from './session';
import searchFilter from './searchFilter';

export default combineReducers({
  events,
  event,
  submit, 
  session,
  searchFilter
});
