import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('matches snapshot for Header', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
