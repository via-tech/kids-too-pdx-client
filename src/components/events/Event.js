import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.css';
import { Link } from 'react-router-dom';

// import dollar from '../../../public/assets/dollar-symbol.png';

function Event({ event }) {
  const { name, date, time, location, cost, age, description, category, picture } = event;
  // if(event.cost === 'free') {
  //   return <img src={dollar} alt="dollar sign"/>;
  // }
  return (

    <>
      <section className={styles.Event}>
        <img src={picture} alt='event picture' />
        <Link to={`/events/${event.id}`} key={event.id}><h2>{name}</h2></Link>
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
