import React from 'react';
import PropTypes from 'prop-types';

export const withActive = Component => {
  function WithActive(props) {
    const { role, history } = props;

    if(role === 'org' || role === 'admin') return <Component {...props} />;
    
    return history.push('/activate');
  }

  WithActive.propTypes = {
    role: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  return WithActive;
};
