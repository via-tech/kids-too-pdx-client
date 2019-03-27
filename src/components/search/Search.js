import React from 'react';
import styles from './Search.css';

function Search() {
  return (
    <section className={styles.Select}>
      <select>
        <option value="DEFAULT" hidden>Category</option>
        <option value="sports">Sports</option>
        <option value="arts">Art</option>
        <option value="music">Music</option>
        <option value="performance">Performance</option>
        <option value="education">Educational</option>
        <option value="volunteer">Volunteer</option>
      </select>
      <label>
        Price:
        <input type="number" value="price" placeholder="max"/>
      </label>
      <label>
        Age:
        <input type="number" value="ageMax" placeholder="min age"/>
        <input type="number" value="ageMax" placeholder="max age"/>
      </label>
    </section>
  );
}

export default Search;
