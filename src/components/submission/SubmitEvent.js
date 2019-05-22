import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitEvent.css';

function SubmitEvent({ orgEvent, handleSubmit, handleChange }) {
  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit.bind(null, orgEvent)}>
        <fieldset>
          <legend>Event Contact Info</legend>

          <label>Name:
            <input type="text" name="contactName" onChange={handleChange} required/>
          </label>

          <label name="email">Email:
            <input type="email" name="email" onChange={handleChange} required/>
          </label>

          <label>Phone #:
            <input type="tel" name="phone" onChange={handleChange} required/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Details</legend>

          <label>Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>

          <label>
            Website: 
            <input type="text" name="website" onChange={handleChange}></input>
          </label>

          <label>Date:
            <input type="date" onChange={handleChange} name="date" required/>
          </label>

          <label>Time:
            <input type="time" onChange={handleChange} name="time" required />
          </label>

          <label>Location:
            <input type="text" placeholder="Venue"  name="venue" onChange={handleChange} required />
            <input type="text" placeholder="Address" name="address" onChange={handleChange} required />
            <input type="text" placeholder="City" name="city" onChange={handleChange} />
            <input type="state" placeholder="State" name="state" onChange={handleChange} />
            <input type="zipcode" placeholder="Zipcode" name="zipcode" onChange={handleChange} />
          </label>

          <label>Price:
            <input type="number" placeholder="$" onChange={handleChange} name="price" min="0" required/>
          </label>

          <label className={styles.radio}>Reduced Rate Available:
            <input type="checkbox" name="reducedRate" value="" onChange={handleChange}/>
          </label>

          <label>Age Range:
            <input type="number" placeholder="Min Age"  onChange={handleChange} name="minAge" min="0" required/>
            <input type="number" placeholder="Max Age" onChange={handleChange} name="maxAge" min="0" required/>
          </label>

          <label>Category:
            <select onChange={handleChange} name="category" required>
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
            <textarea onChange={handleChange} name="description" required/>
          </label>

          <label className={styles.radio}>By checking the box, you agree that your organization accepts all liability for this event:
            <input type="checkbox" value="" name="liability" onChange={handleChange} required/>
          </label>

        </fieldset>
        <button type="submit">CREATE EVENT</button>
      </form>
    </>
  );
}

SubmitEvent.propTypes = {
  orgEvent: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SubmitEvent;
