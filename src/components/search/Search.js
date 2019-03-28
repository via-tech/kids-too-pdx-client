import React from 'react';
import styles from './Search.css';
import PropTypes from 'prop-types';

function Search({ onChange, onSubmit }) {
  return (
    <form className={styles.Select} onSubmit={onSubmit}>
      <select name="category" onChange={onChange}>
        <option value="DEFAULT" hidden>Category</option>
        <option value="Sports">Sports</option>
        <option value="Art">Art</option>
        <option value="Music">Music</option>
        <option value="Performance">Performance</option>
        <option value="Educational">Educational</option>
        <option value="Volunteer">Volunteer</option>
      </select>
      <label>
        Price:
        <input type="number" name="price" onChange={onChange} placeholder="max"/>
      </label>
      <label>
        Age:
        <input name="ageMin" onChange={onChange} type="number" placeholder="min age"/>
        <input name="ageMax" onChange={onChange} type="number" placeholder="max age"/>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Search;
