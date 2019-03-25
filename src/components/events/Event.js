import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';

function Event({ event }) {
  const { name, date, time, location, cost, age, description, category, picture } = event;
  return (
    <>
    <section className={styles.Event}>
      <img src={picture} alt='event picture'/>
      <h2>{name}</h2>
      <p>{date} @ {time}</p>
      <p><span>Location:</span>{location.address}</p>
      <p><span>Cost:</span>{cost}</p>
      <p><span>Age:</span>{age}</p>
      <p>{category}</p> 
      <p>{description}</p>
    </section>
    </>
  );
}
Event.propTypes = {
  event: PropTypes.object.isRequired
};
export default Event;
