import React from 'react';
import renderer from 'react-test-renderer';
import { withFetch } from './withFetch';

describe('With Fetch wrapper', () => {
  it('snapshots withFetch', () => {
    const props = {
      fetch: jest.fn(),
      loader: true
    };

    const Component = withFetch(() =>
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
