import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';
import { Link } from 'react-router-dom';

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
        <Link to={`/events/${event._id}`}><h2>{name}</h2></Link>
        <p><span>Date:</span>{date}</p>
        <p><span>Time: @</span> {time}</p>
        <p><span>Location:</span>{location}</p>
        <p><span>Cost:</span>{price}</p>
        <p><span>Age:</span>{ageMin}-{ageMax}</p>
        <p>{category}</p>
        <p id={styles.description}>{description}</p>
      </section>
    </>
  );
}
Event.propTypes = {
  event: PropTypes.object.isRequired
};
export default Event;
