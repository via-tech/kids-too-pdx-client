import { combineReducers } from 'redux';
import events from './events';
import event from './eventDetail';
import submit from './submitEvent';
import session from './session';
import resources from './resources';
import forgotPass from './forgotPass';
import stripe from './stripe';

export default combineReducers({
  events,
  event,
  submit, 
  session,
  resources,
  forgotPass,
  stripe
});
