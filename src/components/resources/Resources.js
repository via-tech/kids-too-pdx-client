import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resources.css';

function Resources({ orgs }) {
  const orgsList = orgs.map((org, ind) =>
    <section key={ind}>
      <img alt={`${org.name} Logo`} src={org.logo} />
      <h2>{org.name}</h2>
      <p>{org.bio}</p>
    </section>
  );

  return (
    <section className={styles.Resources}>
      {orgsList}
    </section>
  );
}

Resources.propTypes = {
  orgs: PropTypes.array
};

export default Resources;
