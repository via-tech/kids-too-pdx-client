import { getOrgs } from './resources';

describe('resources selectors', () => {
  const state = {
    resources: {
      orgs: [
        {
          name: 'The Org 1',
          role: 'org'
        },
        {
          name: 'The Org 2',
          role: 'org'
        },
        {
          name: 'The Org 3',
          role: 'org'
        }
      ]
    }
  };

  it('gets orgs', () => {
    expect(getOrgs(state)).toEqual([
      {
        name: 'The Org 1',
        role: 'org'
      },
      {
        name: 'The Org 2',
        role: 'org'
      },
      {
        name: 'The Org 3',
        role: 'org'
      }
    ]);
  });
});
