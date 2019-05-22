import React from 'react';
import styles from './Search.css';
import PropTypes from 'prop-types';

function Search({ onChange, onSubmit, filters }) {
  return (
    <form className={styles.Select} onSubmit={onSubmit}>
      <select name="category" value={filters.category} onChange={onChange}>
        <option value="" hidden>Category</option>
        <option value="">All</option>
        <option value="Sports">Sports</option>
        <option value="Art">Art</option>
        <option value="Music">Music</option>
        <option value="Performance">Performance</option>
        <option value="Educational">Educational</option>
        <option value="Volunteer">Volunteer</option>
      </select>
      <label>
        Price:
        <input type="number" name="price" value={filters.price} onChange={onChange} placeholder="max" min="0"/>
      </label>
      <label>
        Age:
        <input name="ageMin" value={filters.ageMin} onChange={onChange} type="number" placeholder="min" min="0"/>
        <input name="ageMax" value={filters.ageMax} onChange={onChange} type="number" placeholder="max" min="0"/>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  filters: PropTypes.object
};

export default Search;
