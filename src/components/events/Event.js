import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';
// import EventDetail from '../events/EventDetail';
import { Link } from 'react-router-dom';

function Event({ event, details }) {
  const date = new Date(event.date);
  event.dateDisplay = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (

    <>
      <section className={styles.Event}>
        <img src={event.image} alt='event picture' />
        <Link to={`/events/${event._id}`}><h2>{event.name}</h2></Link>
        <p><span>Date:</span>{event.date}</p>
        <p><span>Time:</span>{event.time}</p>
        {event.location && <p><span>Location:</span>{event.location.venue}</p>}
        <p><span>Cost:</span>{event.price}</p>
        <p><span>Age:</span>{event.ageMin}-{event.ageMax}</p>
        <p>{event.category}</p>
        {details && event.description && <p>{event.description}</p>}
      </section>
    </>
  );
}
Event.propTypes = {
  event: PropTypes.object.isRequired,
  details: PropTypes.boolean
};

export default Event;
