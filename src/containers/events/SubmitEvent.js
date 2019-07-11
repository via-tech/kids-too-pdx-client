import { connect } from 'react-redux';
import React from 'react';
import SubmitEventForm from '../../components/submission/SubmitEventForm';
import { getEvent } from '../../selectors/submitEvent';
import { updateEvent, createEvent } from '../../actions/submitEvent';
import { getToken, getUser } from '../../selectors/session';

function SubmitEvent(props) {
  return <SubmitEventForm {...props} />;
}

const modelEvent = orgEvent => {
  const { contactName, email, phone, venue, address, city, state, zipcode, ageMin, ageMax } = orgEvent;

  return {
    ...orgEvent,
    contact: { contactName, email, phone },
    location: { venue, address, city, state, zipcode },
    ageMin: ageMin || 0,
    ageMax: ageMax || 100
  };
};

const mapStateToProps = state => ({
  orgEvent: getEvent(state),
  token: getToken(state),
  role: getUser(state).role
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    const { name, value } = target;
    dispatch(updateEvent({ [name]: value }));
  },

  handleSubmit(orgEvent, event) {
    const action = createEvent(modelEvent(orgEvent));
    event.preventDefault();
    dispatch(action);
    action.payload
      .then(({ _id }) => props.history.push(`/events/${_id}`));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitEvent);
