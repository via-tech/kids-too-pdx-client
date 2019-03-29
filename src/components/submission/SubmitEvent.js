import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitEvent.css';

function SubmitEvent({
  contact, name, website, date, time, location, price, minAge, maxAge, category, description,
  rrSelect, handleSubmit, handleChange, reducedRate
}) {
  const { contactName, email, phone } = contact;
  const { venue, address, city, state, zipcode } = location;
  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit.bind(
        null, contact, name, website, date, time, location, price, minAge, maxAge, reducedRate, category, description
      )}>
        <fieldset>
          <legend>Contact Info</legend>

          <label>Name:
            <input type="text" value={contactName} name="contactName" onChange={handleChange} required/>
          </label>

          <label name="email">Email:
            <input type="email" value={email} name="contactEmail" onChange={handleChange} required/>
          </label>

          <label>Phone #:
            <input type="tel" value={phone} name="contactPhone" onChange={handleChange} required/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Info</legend>

          <label>Name:
            <input type="text" value={name} name="name" onChange={handleChange} />
          </label>

          <label>
            Website: 
            <input type="text" value={website} name="website" onChange={handleChange}></input>
          </label>

          <label>Date:
            <input type="date" value={date} onChange={handleChange} name="date" required/>
          </label>

          <label>Time:
            <input type="time" value={time} onChange={handleChange} name="time" required />
          </label>

          <label>Location:
            <input type="text" placeholder="Venue" value={venue} name="locationVenue" onChange={handleChange} required />
            <input type="text" placeholder="Address" value={address} name="locationAddress" onChange={handleChange} required />
            <input type="text" placeholder="City" value={city} name="locationCity" onChange={handleChange} />
            <input type="state" placeholder="State" value={state} name="locationState" onChange={handleChange} />
            <input type="zipcode" placeholder="Zipcode" value={zipcode} name="locationZipcode" onChange={handleChange} />
          </label>

          <label>Price:
            <input type="number" placeholder="$" value={price} onChange={handleChange} name="price" required/>
          </label>

          <label className={styles.radio}>Reduced Rate Available:
            <input type="checkbox" onChange={rrSelect} value={reducedRate}/>
          </label>

          <label>Age Range:
            <input type="number" placeholder="Min Age" value={minAge} onChange={handleChange} name="minAge" required/>
            <input type="number" placeholder="Max Age" value={maxAge} onChange={handleChange} name="maxAge" required/>
          </label>

          <label>Category:
            <select value={category} onChange={handleChange} name="category" required>
              <option value="DEFAULT" hidden>Category</option>
              <option value="Sports">Sports</option>
              <option value="Art">Art</option>
              <option value="Music">Music</option>
              <option value="Performance">Performance</option>
              <option value="Educational">Educational</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </label>

          <label>Description
            <textarea value={description} onChange={handleChange} name="description" required/>
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
  website: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.object,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  minAge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxAge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  reducedRate: PropTypes.bool,
  category: PropTypes.string,
  description: PropTypes.string,
  rrSelect: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SubmitEvent;
