import React from 'react';
import renderer from 'react-test-renderer';
import ReactivateOrgForm from './ReactivateOrgForm';

describe('Reactivation Form', () => {
  it('snapshots ReactivateOrgForm', () => {
    const props = {
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      user: {
        username: 'theOrg@org.com',
        password: 'pass'
      },
      subFee: '900'
    };

    const tree = renderer.create(
      <ReactivateOrgForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots ReactivateOrgForm with error', () => {
    const props = {
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      user: {
        username: 'theOrg@org.com',
        password: 'pass'
      },
      subFee: '900',
      error: 'User already exists'
    };

    const tree = renderer.create(
      <ReactivateOrgForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
