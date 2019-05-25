import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitEvent.css';
import { Link } from 'react-router-dom';

function SubmitEvent({ orgEvent, handleSubmit, handleChange }) {
  if(!orgEvent.token) {
    return <h1>Please <Link to="/login">Log In</Link>  to post an event!</h1>;
  }
  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit.bind(null, orgEvent)}>
        <fieldset>
          <legend>Event Contact Info</legend>

          <label>Contact Name:
            <input type="text" name="contactName" value="Shaba R" onChange={handleChange} required/>
          </label>

          <label name="email">Email:
            <input type="email" name="email" value="org@email.com" onChange={handleChange} required/>
          </label>

          <label>Phone #:
            <input type="tel" name="phone" value="5551234567" onChange={handleChange} required/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Details</legend>

          <label>Event Name:
            <input type="text" name="name" value="The Event" onChange={handleChange} />
          </label>

          <label>Website: 
            <input type="text" name="website" value="org.com" onChange={handleChange}></input>
          </label>

          <label>Date:
            <input type="date" onChange={handleChange} value="5/21/2019" name="date" required/>
          </label>

          <label>Time:
            <input type="time" onChange={handleChange} value="2PM" name="time" required />
          </label>

          <label>Location:
            <input type="text" placeholder="Venue" value="Library"  name="venue" onChange={handleChange} required />
            <input type="text" placeholder="Address" value="123 Main St." name="address" onChange={handleChange} required />
            <input type="text" placeholder="City" value="Portland" name="city" onChange={handleChange} />
            <input type="state" placeholder="State" value="OR" name="state" onChange={handleChange} />
            <input type="zipcode" placeholder="Zipcode" value="97203" name="zipcode" onChange={handleChange} />
          </label>

          <label>Price:
            <input type="number" placeholder="$" value="200" onChange={handleChange} name="price" min="0" required/>
          </label>

          <label className={styles.radio}>Reduced Rate Available:
            <input type="checkbox" name="reducedRate" value="" onChange={handleChange}/>
          </label>

          <label>Age Range:
            <input type="number" placeholder="Min Age" value="8" onChange={handleChange} name="minAge" min="0" required/>
            <input type="number" placeholder="Max Age" value="14" onChange={handleChange} name="maxAge" min="0" required/>
          </label>

          <label>Category:
            <select onChange={handleChange} value="Art" name="category" required>
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
            <textarea onChange={handleChange} value="blah de blah" name="description" required/>
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
