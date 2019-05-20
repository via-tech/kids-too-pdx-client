import React from 'react';
import renderer from 'react-test-renderer';
import SignInForm from './SignInForm';

describe('Sign in form', () => {
  it('snapshots SignInForm', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      user: {
        email: 'theOrg@org.com',
        password: 'pass'
      }
    };

    const tree = renderer.create(
      <SignInForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
