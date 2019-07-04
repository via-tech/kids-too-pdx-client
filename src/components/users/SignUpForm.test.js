import React from 'react';
import renderer from 'react-test-renderer';
import SignUpForm from './SignUpForm';

describe('Sign up form', () => {
  it('snapshots SignUpForm', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn()
    };

    const tree = renderer.create(
      <SignUpForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots form with error', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      error: 'User already exists'
    };

    const tree = renderer.create(
      <SignUpForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
