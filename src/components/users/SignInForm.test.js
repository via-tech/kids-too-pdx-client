import React from 'react';
import renderer from 'react-test-renderer';
import SignInForm from './SignInForm';
import { MemoryRouter } from 'react-router-dom';

describe('Sign in form', () => {
  it('snapshots SignInForm', () => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      user: {
        username: 'theOrg@org.com',
        password: 'pass'
      }
    };

    const tree = renderer.create(
      <MemoryRouter>
        <SignInForm {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots SigninForm with error', () => {
    const props = {
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      error: 'Incorrect username or password'
    };

    const tree = renderer.create(
      <MemoryRouter>
        <SignInForm {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
