import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';
import styles from './Events.css';

function Events({ events }) {
  const listOfEvents = events.map((event, i) => {
    return <li key={i}><Event event={event} /></li>;
  });
  return (
    <>
      <section className={styles.Select}>
        <select>
          <option value="" selected disabled hidden>Category</option>
          <option value="sports">Sports</option>
          <option value="arts">Art</option>
          <option value="music">Music</option>
          <option value="performance">Performance</option>
          <option value="education">Educational</option>
          <option value="volunteer">Volunteer</option>
        </select>
        <select>
          <option value="" selected disabled hidden>Cost</option>
          <option value="free">Free</option>
          <option value="donation">Donation</option>
          <option value="$">$1-$5</option>
          <option value="$$">$6-$10</option>
          <option value="$$$">$10+</option>
          <option value="$$$$">$20+</option>
        </select>
        <select>
          <option value="" selected disabled hidden>Age</option>
          <option value="baby">Babies</option>
          <option value="ps">Pre-K</option>
          <option value="k3">K-3</option>
          <option value="4-6">4-6</option>
          <option value="ms">MS</option>
          <option value="hs">HS</option>
        </select>
      </section>
      <section className={styles.Event}>
        <ul>
          {listOfEvents}
        </ul>
      </section>
    </>
  );
}
Events.propTypes = {
  events: PropTypes.array
};
export default Events;
