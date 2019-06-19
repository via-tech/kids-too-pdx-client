import React from 'react';
import renderer from 'react-test-renderer';
import PaymentInfo from './PaymentInfo';

describe('Registration Form', () => {
  it('snapshots PaymentInfo form', () => {
    const props = {
      handleChange: jest.fn()
    };

    const tree = renderer.create(
      <PaymentInfo {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
