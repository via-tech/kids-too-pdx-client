import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitEvent.css';

function SubmitEvent({
  contact, name, date, time, location, price, minAge, maxAge, category, description,
  contactChange, nameChange, dateChange, timeChange, locationChange, priceChange,
  rrSelect, minAgeChange, maxAgeChange, onSelectCategory, descriptionChange
}) {
  return (
    <>
      <form className={styles.Form}>
        <fieldset>
          <legend>Contact Info</legend>

          <label name="name">Name:
            <input type="text" value={contact.name} name="contact" onChange={contactChange} required />
          </label>

          <label name="email">Email:
            <input type="email" value={contact.email} name ="email" onChange={contactChange} required />
          </label>

          <label>Phone #:
            <input type="tel" value={contact.phone} name="phone" onChange={contactChange} required />
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Info</legend>

          <label>Name:
            <input type="text" value={name} onChange={nameChange} required />
          </label>

          <label>Date:
            <input type="date" value={date} onChange={dateChange} required />
          </label>

          <label>Time:
            <input type="time" value={time} onChange={timeChange} required />
          </label>

          <label>Location:
            <input type="text" placeholder="Venue" value={location.venue} name="venue" onChange={locationChange} required />
            <input type="text" placeholder="Address" value={location.address} name="address" onChange={locationChange} required />
            <input type="text" placeholder="City" value={location.city} name="city" onChange={locationChange}/>
            <input type="state" placeholder="State" value={location.state} name="state" onChange={locationChange}/>
            <input type="zipcode" placeholder="Zipcode" value={location.zipcode} name="zipcode" onChange={locationChange}/>
          </label>

          <label>Price:
            <input type="number" placeholder="$" value={price} onChange={priceChange} required />
          </label>

          <label>Reduced Rate Available:
            <button type="radio" onSelect={rrSelect} value={rr} checked={this.state.rr}></button>
          </label>

          <label>Age Range:
            <input type="number" placeholder="Min Age" value={minAge} onChange={minAgeChange} required />
            <input type="number" placeholder="Max Age" value={maxAge} onChange={maxAgeChange} required />
          </label>

          <label>Category:
            <select value={category} onSelect={onSelectCategory} required>
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
            <textarea value={description} onChange={descriptionChange} required />
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
  date: PropTypes.date,
  time: PropTypes.string,
  location: PropTypes.object,
  price: PropTypes.string,
  minAge: PropTypes.number,
  maxAge: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  contactChange: PropTypes.func.isRequired,
  nameChange: PropTypes.func.isRequired,
  dateChange: PropTypes.func.isRequired,
  timeChange: PropTypes.func.isRequired,
  locationChange: PropTypes.func.isRequired,
  priceChange: PropTypes.func.isRequired,
  rrSelect: PropTypes.func.isRequired,
  minAgeChange: PropTypes.func.isRequired,
  maxAgeChange: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  descriptionChange: PropTypes.func.isRequired
};

export default SubmitEvent;
