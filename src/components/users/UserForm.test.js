import React from 'react';
import renderer from 'react-test-renderer';
import UserForm from './UserForm';

describe('Sign up form', () => {
  it('snapshots UserForm', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      user: {
        email: 'theOrg@org.com',
        password: 'pass'
      }
    };

    const tree = renderer.create(
      <UserForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
