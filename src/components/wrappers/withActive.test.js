import React from 'react';
import renderer from 'react-test-renderer';
import { withActive } from './withActive';

describe('With active wrapper', () => {
  const Component = withActive(() =>
    <div>
      <h1>The Main Component</h1>
    </div>
  );
  
  it('snapshots withActive with inactive org', () => {
    const props = {
      role: 'inactive',
      history: {
        push(route) {
          return route;
        }
      }
    };

    const tree = renderer.create(
      <Component {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots withActive with activated org', () => {
    const props = {
      role: 'org',
      history: {
        push(route) {
          return route;
        }
      }
    };

    const tree = renderer.create(
      <Component {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
