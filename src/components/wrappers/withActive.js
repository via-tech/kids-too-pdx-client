import React from 'react';
import PropTypes from 'prop-types';

export const withActive = Component => {
  function WithActive(props) {
    const { role, history } = props;

    if(role === 'org' || role === 'admin') {
      return <Component {...props} />;
    } else {
      return history.push('/activate');
    }
  }

  WithActive.propTypes = {
    role: PropTypes.string,
    history: PropTypes.object
  };

  return WithActive;
};
