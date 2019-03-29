import React from 'react';
import renderer from 'react-test-renderer';
import Resources from './Resources';

describe('Resources', () => {
  it('snapshots Resources', () => {
    const tree = renderer.create(
      <Resources />
    );

    expect(tree).toMatchSnapshot();
  });
});
