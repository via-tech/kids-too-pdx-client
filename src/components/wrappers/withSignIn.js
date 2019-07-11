import React from 'react';
import PropTypes from 'prop-types';

export const withSignIn = Component => {
  function WithSignIn(props) {
    const { token, history } = props;

    if(!token) return history.push('/login');

    return <Component {...props} />;
  }

  WithSignIn.propTypes = {
    token: PropTypes.string,
    history: PropTypes.object
  };

  return WithSignIn;
};
