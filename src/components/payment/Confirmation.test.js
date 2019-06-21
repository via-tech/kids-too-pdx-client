import React from 'react';
import renderer from 'react-test-renderer';
import Confirmation from './Confirmation';
import { MemoryRouter } from 'react-router-dom';

describe('Confirmation', () => {
  it('snapshots confirmation page', () => {
    const props = {
      subFee: 500,
      confirmation: true
    };

    const tree = renderer.create(
      <MemoryRouter>
        <Confirmation {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots confirmation page without confirmation', () => {
    const props = {
      subFee: 500,
      confirmation: false
    };

    const tree = renderer.create(
      <MemoryRouter>
        <Confirmation {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
