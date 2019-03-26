import React from 'react';
import PropTypes from 'prop-types';

function EventsDetail({ event }) {
  const { name, date, time, location, cost, age, description, category, image } = event;
 
  return (
    <section>
      <h2>{name}</h2>
      <img src={image} alt='event picture' />
      <p>{date} @ {time}</p>
      <p><span>Location:</span>{location.address}</p>
      <p><span>Cost:</span>{cost}</p>
      <p><span>Age:</span>{age}</p>
      <p>{category}</p>
      <p>{description}</p>
    </section>
  );
}
EventsDetail.propTypes = {
  event: PropTypes.object.isRequired
};
export default EventsDetail;
