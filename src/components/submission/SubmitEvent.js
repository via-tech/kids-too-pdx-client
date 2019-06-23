import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitEvent.css';

function SubmitEvent({ orgEvent, token, handleSubmit, handleChange, history }) {
  if(!token) {
    history.push('/login');
  }
  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit.bind(null, orgEvent)}>
        <fieldset>
          <legend>Event Contact Info</legend>

          <label>Name<span className={styles.required}>*</span>:
            <input type="text" name="contactName" onChange={handleChange} required/>
          </label>

          <label name="email">Email<span className={styles.required}>*</span>:
            <input type="email" name="email" onChange={handleChange} required/>
          </label>

          <label>Phone #<span className={styles.required}>*</span>:
            <input type="tel" name="phone" onChange={handleChange} required/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Details</legend>

          <label>Event Name
            <input type="text" name="name" onChange={handleChange} />
          </label>

          <label>Registration Link
            <input type="text" name="website" onChange={handleChange}></input>
          </label>

          <label>Date<span className={styles.required}>*</span>:
            <input type="date" onChange={handleChange} name="date" required/>
          </label>

          <label>Time<span className={styles.required}>*</span>:
            <input type="string" onChange={handleChange} name="time" required />
          </label>

          <label>Location<span className={styles.required}>*</span>:
            <input type="text" placeholder="Venue" name="venue" onChange={handleChange} required />
            <input type="text" placeholder="Address" name="address" onChange={handleChange} required />
            <input type="text" placeholder="City" name="city" onChange={handleChange} />
            <input type="state" placeholder="State" name="state" onChange={handleChange} />
            <input type="zipcode" placeholder="Zipcode" name="zipcode" onChange={handleChange} />
          </label>

          <label>Price<span className={styles.required}>*</span>:
            <input type="number" placeholder="$" onChange={handleChange} name="price" min="0" required/>
          </label>

          <label className={styles.radio}>Reduced Rate Available:
            <input type="checkbox" name="reducedRate" value="1" onChange={handleChange}/>
          </label>

          <p>Age<span className={styles.required}>*</span></p>

          <input type="radio" onChange={handleChange} name="age" value="0" required/>All ages<br/>

          <input type="radio" onChange={handleChange} name="age" value="1"/>Enter an age range

          <label>
            <input type="number" placeholder="Min Age" onChange={handleChange} name="ageMin" min="0" max="100"/>
            
            <input type="number" placeholder="Max Age" onChange={handleChange} name="ageMax" min="0" max="100"/>
          </label>

          <label>Category<span className={styles.required}>*</span>
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

          <label>Description<span className={styles.required}>*</span>
            <textarea onChange={handleChange} name="description" required/>
          </label>

          <label className={styles.radio}>By checking the box, you agree that your organization accepts all liability for this event.<span className={styles.required}>*</span>
            <input type="checkbox" value="1" name="liability" onChange={handleChange} required/>
          </label>

        </fieldset>
        <button type="submit">CREATE EVENT</button>
      </form>
    </>
  );
}

SubmitEvent.propTypes = {
  orgEvent: PropTypes.object.isRequired,
  token: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default SubmitEvent;
