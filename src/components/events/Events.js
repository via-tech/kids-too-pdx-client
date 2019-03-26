import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';
import styles from './Events.css';

function Events({ events }) {
  console.log(events);
  const listOfEvents = events.map((event, i) => {
    return <li key={i}><Event event={event} /></li>;
  });
  return (
    <>
      <section className={styles.Select}>
        <select>
          <option value="DEFAULT" hidden>Category</option>
          <option value="sports">Sports</option>
          <option value="arts">Art</option>
          <option value="music">Music</option>
          <option value="performance">Performance</option>
          <option value="education">Educational</option>
          <option value="volunteer">Volunteer</option>
        </select>
        <select>
          <option value="DEFAULT" hidden>Cost</option>
          <option value="free">Free</option>
          <option value="donation">Donation</option>
          <option value="$">$1-$5</option>
          <option value="$$">$6-$10</option>
          <option value="$$$">$10+</option>
          <option value="$$$$">$20+</option>
        </select>
        <select>
          <option value="DEFAULT" hidden>Age</option>
          <option value="hs">All Ages</option>
          <option value="baby">Babies</option>
          <option value="ps">Pre-K</option>
          <option value="k3">K-3</option>
          <option value="4-6">Grade 4-6</option>
          <option value="ms">Grade 6-8</option>
          <option value="hs">Grade 9-12</option>
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
