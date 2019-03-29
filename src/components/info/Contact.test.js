import React from 'react';
import renderer from 'react-test-renderer';
import Contact from './Contact';

describe('Contact', () => {
  it('snapshots Contact', () => {
    const tree = renderer.create(
      <Contact />
    );

    expect(tree).toMatchSnapshot();
  });
});
