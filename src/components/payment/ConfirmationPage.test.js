import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmationPage from './ConfirmationPage';
import { MemoryRouter } from 'react-router-dom';

describe('ConfirmationPage', () => {
  it('snapshots confirmation page', () => {
    const props = {
      subFee: '500',
      confirmation: true
    };

    const tree = renderer.create(
      <MemoryRouter>
        <ConfirmationPage {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots confirmation page without confirmation', () => {
    const props = {
      subFee: '500',
      confirmation: false
    };

    const tree = renderer.create(
      <MemoryRouter>
        <ConfirmationPage {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
