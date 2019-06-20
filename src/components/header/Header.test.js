import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('snapshot Header signed out', () => {
    const props = {
      token: '',
      handleSignOut: jest.fn()
    };

    const tree = renderer.create(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots Header signed in', () => {
    const props = {
      token: '1234',
      handleSignOut: jest.fn()
    };

    const tree = renderer.create(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
