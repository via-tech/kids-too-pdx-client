import React from 'react';
import PropTypes from 'prop-types';

function EventsList({ events }) {
  const listOfEvents = events.map(event => {
    return <li key={event._id}></li>;
  });

  return (
    <>
      <ul>{listOfEvents}</ul>
    </>
  );
}
EventsList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventsList;
