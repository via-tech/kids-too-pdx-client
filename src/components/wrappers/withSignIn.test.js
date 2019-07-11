import React from 'react';
import renderer from 'react-test-renderer';
import { withSignIn } from './withSignIn';

describe('With sign in wrapper', () => {
  const Component = withSignIn(() =>
    <div>
      <h1>The Main Component</h1>
    </div>
  );

  it('snapshots withSignIn signed out', () => {
    const props = {
      token: '',
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

  it('snapshots withSignIn signed in', () => {
    const props = {
      token: '1234',
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
