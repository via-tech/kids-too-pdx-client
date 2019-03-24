import React from 'react';
import PropTypes from 'prop-types';

function Event({ event }) {
  const { name, date, time, location, price, age, description, category } = event;
  return (
    <>
    <section>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{location.address}</p>
      <p>{price}</p>
      <p>{age}</p>
      <p>{description}</p>
      <p>{category}</p> 
    </section>
    </>
  );
}
Event.propTypes = {
  event: PropTypes.object.isRequired
};
export default Event;
