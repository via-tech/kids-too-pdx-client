import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Confirmation({ subFee, confirmation }) {
  if(confirmation) return (
    <section>
      <p>Payment successful! Subscription will automatically renew each year. If on trial period, a ${subFee} subscription fee will automatically be charged after trial ends. Email reminders will be sent out accordingly. To manage subscription preferences, please visit the dashboard. Thank you!</p>

      <p>
        Continue to
        <Link to="/">Home</Link> page
      </p>
    </section>
  );

  return <p>
    Confirmation page only upon payment!
    Go <Link to="/">Home</Link>
  </p>;
}

Confirmation.propTypes = {
  subFee: PropTypes.string.isRequired,
  confirmation: PropTypes.bool.isRequired
};

export default Confirmation;
