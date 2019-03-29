import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
  it('matches snapshot for Footer', () => {
    const tree = renderer.create(
      <Footer />
    );

    expect(tree).toMatchSnapshot();
  });
});
