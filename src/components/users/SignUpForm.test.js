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
});
