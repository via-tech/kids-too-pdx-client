import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

function Events({ events }) {
  const listOfEvents = events.map((event, i) => {
    return <li key={i}><Event event={event}/></li>;
  });
  return (
    <ul>
      {listOfEvents}
    </ul>
  );
}
Events.propTypes = {
  events: PropTypes.array
};
export default Events;
