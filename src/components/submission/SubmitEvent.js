import React from 'react';
import styles from './SubmitEvent.css';

function SubmitEvent() {
  return (
    <>
      <form className={styles.Form}>
        <fieldset>
          <legend>Contact Info</legend>

          <label name="name">Name:
            <input type="text" />
          </label>

          <label name="email">Email:
            <input type="email" />
          </label>

          <label>Phone #:
            <input type="tel" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Event Info</legend>

          <label>Name:
            <input type="text" />
          </label>

          <label>Date:
            <input type="date" />
          </label>

          <label>Time:
            <input type="time" />
          </label>

          <label>Location:
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="state" placeholder="State" />
            <input type="zipcode" placeholder="Zipcode" />
          </label>

          <label>Price:
            <input type="text" placeholder="$ or Free" />
          </label>

          <label>Age:
            <input type="string" placeholder="Age Range" />
          </label>

          <label>Category:
            <select>
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
            <textarea />
          </label>

        </fieldset>
        <button>SUBMIT</button>

      </form>
    </>
  );
}
export default SubmitEvent;
