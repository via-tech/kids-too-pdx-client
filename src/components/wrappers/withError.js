import React from 'react';
import PropTypes from 'prop-types';
import styles from './Wrappers.css';

export const withError = Component => {
  function WithError(props) {
    const { error } = props;

    return (
      <div className={styles.Wrappers}>
        {error && <p className={styles.Error}>{error}</p>}

        <Component {...props} />
      </div>
    );
  }

  WithError.propTypes = {
    error: PropTypes.string
  };

  return WithError;
};
