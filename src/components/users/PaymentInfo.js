import React from 'react';
import PropTypes from 'prop-types';

function PaymentInfo({ handleChange }) {
  return (
    <>
      <fieldset>
        <legend>Payment Info</legend>

        <label>Card Number
          <input type="text" name="cardNumber" pattern="[0-9]*" maxLength="19" onChange={handleChange} placeholder="Card Number" required />
        </label>

        <label>Security Code
          <input type="text" name="securityCode" maxLength="3" onChange={handleChange} required />
        </label>

        <label>Name
          <input type="text" name="cardName" placeholder="Card Name" onChange={handleChange} required />
        </label>

        <label>Expiration Date
          <input type="text" name="expMonth" pattern="[0-9]*" placeholder="mm" maxLength="2" onChange={handleChange} required />

          <input type="text" name="expYear" pattern="[0-9]*" placeholder="yyyy" minLength="4" maxLength="4" onChange={handleChange} required />
        </label>

        <label>Method
          <input type="radio" name="method" value="visa" onChange={handleChange} required />Visa

          <input type="radio" name="method" value="master" onChange={handleChange} required />Master
        </label>

        <label>Billing Address (if different from business address)
          <label>Street:
            <input type="text" name="billStreet" onChange={handleChange} />
          </label>

          <label>City:
            <input type="text" name="billCity" onChange={handleChange} />
          </label>

          <label>Zip Code:
            <input type="text" name="billZipcode" pattern="[0-9]*" onChange={handleChange} required />
          </label>
        </label>
      </fieldset>

      <h2>Total: $1.00</h2>
    </>
  );
}

PaymentInfo.propTypes = {
  handleChange: PropTypes.func
};

export default PaymentInfo;
