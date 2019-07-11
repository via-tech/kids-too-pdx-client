import React from 'react';
import renderer from 'react-test-renderer';
import { withError } from './withError';

describe('With error wrapper', () => {
  it('snapshots withError', () => {
    const props = {
      error: 'Wrong!!'
    };

    const Component = withError(() =>
      <div>
        <h1>The Main Component</h1>
      </div>
    );

    const tree = renderer.create(
      <Component {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
