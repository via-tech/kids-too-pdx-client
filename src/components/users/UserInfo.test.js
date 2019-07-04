import React from 'react';
import renderer from 'react-test-renderer';
import UserInfo from './UserInfo';

describe('User Info', () => {
  it('snapshots UserInfo', () => {
    const props = {
      handleChange: jest.fn()
    };

    const tree = renderer.create(
      <UserInfo {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
