import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitEvent.css';

function SubmitEvent({
  contact, name, date, time, location, price, minAge, maxAge, category, description,
  rrSelect, handleSubmit, handleChange, reducedRate
}) {
  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit.bind(
        null, contact, name, date, time, location, price, minAge, maxAge, category, description
      )}>
        <fieldset>
          <legend>Contact Info</legend>

          <label>Name:
            <input type="text" value={contact.name} name="contact" onChange={handleChange} required />
          </label>

          <label name="email">Email:
            <input type="email" value={contact.email} name="contact" onChange={handleChange} required />
          </label>

          <label>Phone #:
            <input type="tel" value={contact.phone} name="contact" onChange={handleChange} required />
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Info</legend>

          <label>Name:
            <input type="text" value={name} name="name" onChange={handleChange} required />
          </label>

          <label>Date:
            <input type="date" value={date} onChange={handleChange} required />
          </label>

          <label>Time:
            <input type="time" value={time} onChange={handleChange} required />
          </label>

          <label>Location:
            <input type="text" placeholder="Venue" value={location.venue} name="venue" onChange={handleChange} required />
            <input type="text" placeholder="Address" value={location.address} name="address" onChange={handleChange} required />
            <input type="text" placeholder="City" value={location.city} name="city" onChange={handleChange} />
            <input type="state" placeholder="State" value={location.state} name="state" onChange={handleChange} />
            <input type="zipcode" placeholder="Zipcode" value={location.zipcode} name="zipcode" onChange={handleChange} />
          </label>

          <label>Price:
            <input type="number" placeholder="$" value={price} onChange={handleChange} required/>
          </label>

          <label>Reduced Rate Available:
            <input type="radio" onChange={rrSelect} value={reducedRate} checked={reducedRate === true}/>
          </label>

          <label>Age Range:
            <input type="number" placeholder="Min Age" value={minAge} onChange={handleChange} required/>
            <input type="number" placeholder="Max Age" value={maxAge} onChange={handleChange} required/>
          </label>

          <label>Category:
            <select value={category} onChange={handleChange} required>
              <option value="DEFAULT" hidden>Category</option>
              <option value="sports">Sports</option>
              <option value="arts">Art</option>
              <option value="music">Music</option>
              <option value="performance">Performance</option>
              <option value="education">Educational</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </label>

          <label>Description
            <textarea value={description} onChange={handleChange} required/>
          </label>

        </fieldset>
        <button>SUBMIT</button>
      </form>
    </>
  );
}

SubmitEvent.propTypes = {
  contact: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.number,
  time: PropTypes.string,
  location: PropTypes.object,
  price: PropTypes.string,
  minAge: PropTypes.number,
  maxAge: PropTypes.number,
  reducedRate: PropTypes.bool,
  category: PropTypes.string,
  description: PropTypes.string,
  rrSelect: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SubmitEvent;
