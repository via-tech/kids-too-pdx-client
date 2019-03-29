import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';
import Search from '../search/Search';
import styles from './Events.css';

function Events({ events, onChange, onSubmit, details }) {
  const listOfEvents = events.map((event, i) => {
    return <li key={i}><Event event={event} details={details} /></li>;
  });
  return (
  <>
    <Search 
      onChange={onChange}
      onSubmit={onSubmit}
    />
    <section className={styles.Event}>
      <ul>
        {listOfEvents}
      </ul>
    </section>
  </>
  );
}
Events.propTypes = {
  events: PropTypes.array,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  details: PropTypes.bool
};
export default Events;
