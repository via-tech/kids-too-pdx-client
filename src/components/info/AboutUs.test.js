import React from 'react';
import renderer from 'react-test-renderer';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('snapshots About Us', () => {
    const tree = renderer.create(
      <AboutUs />
    );

    expect(tree).toMatchSnapshot();
  });
});
