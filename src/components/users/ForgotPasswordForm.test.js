import React from 'react';
import renderer from 'react-test-renderer';
import ForgotPasswordForm from './ForgotPasswordForm';

describe('Forgot Password component', () => {
  it('snapshots ForgotPassword', () => {
    const props = {
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      message: ''
    };

    const tree = renderer.create(
      <ForgotPasswordForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots component with message', () => {
    const props = {
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      message: 'Temporary password has been sent to test@email.com'
    };

    const tree = renderer.create(
      <ForgotPasswordForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
