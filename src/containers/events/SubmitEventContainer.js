import { connect } from 'react-redux';
import React from 'react';
import SubmitEvent from '../../components/submission/SubmitEvent';
import { getEvent } from '../../selectors/submitEvent';
import { updateEvent, createEvent } from '../../actions/submitEvent';
import { getToken } from '../../selectors/session';

function SubmitContainer(props) {
  return <SubmitEvent {...props} />;
}

let token = '';

const modelEvent = orgEvent => {
  const { contactName, email, phone, venue, address, city, state, zipcode } = orgEvent;

  return {
    ...orgEvent,
    token,
    contact: { contactName, email, phone },
    location: { venue, address, city, state, zipcode }
  };
};

const mapStateToProps = state => {
  token = getToken(state);
  return { orgEvent: getEvent(state) };
};

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    const value = target.checked || target.value;
    dispatch(updateEvent({ [target.name]: value }));
  },

  handleSubmit(orgEvent, event) {
    event.preventDefault();
    console.log('orgEvent', orgEvent);
    
    dispatch(createEvent(modelEvent(orgEvent)));
    // action.payload.then(({ _id }) => {
    //   props.history.push(`/events/${_id}`);
    // });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitContainer);
