import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';
import { Link } from 'react-router-dom';

function Event({ event, details }) {
  if(event.ageMin && event.ageMax) {
    event.age = `${event.ageMin}-${event.ageMax}`;
  } 
  else if(event.ageMin === 0 && !event.ageMax) {
    event.age = 'All ages';
  } 
  else if(event.ageMax > 50 && !event.ageMinx) {
    event.age = 'All ages';
  }  
  else if(event.ageMin) {
    event.age = `${event.ageMin}`;
  } 
  else if(event.ageMax) {
    event.age = `${event.ageMax}`;
  } 
  if(event.price === 0) {
    event.price = 'Free';
  }

  const date = new Date(event.date);
  event.dateDisplay = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <>
      <section className={styles.Event}>
        <figure>
          <img src={event.image} alt='event picture' />
        </figure>
        <Link to={`/events/${event._id}`}><h2>{event.name}</h2></Link>
        <p><span>Date:</span>{event.dateDisplay}</p>
        {event.time && <p><span>Time:</span> {event.time}</p>}
        {event.location && event.location.venue && <p><span>Location:</span>{event.location.venue}</p>}
        {event.price && <p><span>Cost:</span>${event.price}</p>}
        {event.age && <p><span>Age:</span> {event.age}</p>}
        {event.category && <p>{event.category}</p>}
        {details && event.description && <p>{event.description}</p>}
        {details && event.website && <p className={styles.info}><a href={event.website} target="_blank">MORE INFO</a></p>}
      </section>
    </>
  );
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  details: PropTypes.boolean
};

export default Event;
