import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

describe('Search', () => {
  it('snapshots Search', () => {
    const props = {
      onChange: jest.fn(),
      onSubmit: jest.fn()
    };

    const tree = renderer.create(
      <Search {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
