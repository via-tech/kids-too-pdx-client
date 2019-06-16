import { connect } from 'react-redux';
import React from 'react';
import SubmitEvent from '../../components/submission/SubmitEvent';
import { getEvent } from '../../selectors/submitEvent';
import { updateEvent, createEvent } from '../../actions/submitEvent';
import { getToken } from '../../selectors/session';

function SubmitContainer(props) {
  return <SubmitEvent {...props} />;
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

const mapStateToProps = state => {
  const orgEvent = getEvent(state);
  orgEvent.token = getToken(state);
  return { orgEvent };
};

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
)(SubmitContainer);
