import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';

// import dollar from '../../../public/assets/dollar-symbol.png';
function Event({ event }) {
  const { name, date, time, location, price, ageMin, ageMax, description, category, image } = event;
  // if(event.cost === 'free') {
  //   return <img src={dollar} alt="dollar sign"/>;
  // }
  return (

    <>
      <section className={styles.Event}>
        <img src={image} alt='event picture' />
        <a href={`/events/${event._id}`}><h2>{name}</h2></a>
        <p>{date} @ {time}</p>
        <p><span>Location:</span>{location}</p>
        <p><span>Cost:</span>{price}</p>
        <p><span>Age:</span>{ageMin} - {ageMax}</p>
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
