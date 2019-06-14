import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';
import Search from '../search/Search';
import styles from './Events.css';

function Events({ events, onChange, onSubmit, details, filters }) {
  let display;
  const listOfEvents = events.map((event, i) => {
    return <li key={i}><Event event={event} details={details} /></li>;
  });

  if(listOfEvents.length) {
    display =
      <ul>
        {listOfEvents}
      </ul>;
  } else {
    display = <p>No results match search fields</p>;
  }

  return (
  <>
    <Search 
      onChange={onChange}
      onSubmit={onSubmit}
      filters={filters}
    />
    <section className={styles.Event}>
      {display}
    </section>
  </>
  );
}
Events.propTypes = {
  events: PropTypes.array,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  details: PropTypes.bool,
  filters: PropTypes.object
};
export default Events;
