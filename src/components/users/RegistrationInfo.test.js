import React from 'react';
import renderer from 'react-test-renderer';
import RegistrationInfo from './RegistrationInfo';

describe('Registration Form', () => {
  it('snapshots RegistrationInfo form', () => {
    const props = {
      handleChange: jest.fn()
    };

    const tree = renderer.create(
      <RegistrationInfo {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
