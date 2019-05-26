import React from 'react';
import renderer from 'react-test-renderer';
import Resources from './Resources';

describe('Resources', () => {
  const props = {
    orgs: [
      {
        _id: '0',
        role: 'org',
        username: 'org1',
        password: 'org1pass',
        name: 'The Org1',
        email: 'org1@email.com',
        phone: '555-123-4567',
        address: {
          street: '123 Main St.',
          city: 'Portland',
          zipcode: '97203'
        },
        logo: 'org.com',
        bio: 'The bestest organization ever!',
        token: '0'
      },
      {
        _id: '1',
        role: 'org',
        username: 'org2',
        password: 'org2pass',
        name: 'The Org2',
        email: 'org2@email.com',
        phone: '555-123-4567',
        address: {
          street: '123 Main St.',
          city: 'Portland',
          zipcode: '97203'
        },
        logo: 'org.com',
        bio: 'The bestest organization ever!',
        token: '1'
      },
      {
        _id: '2',
        role: 'org',
        username: 'org3',
        password: 'org3pass',
        name: 'The Org3',
        email: 'org3@email.com',
        phone: '555-123-4567',
        address: {
          street: '123 Main St.',
          city: 'Portland',
          zipcode: '97203'
        },
        logo: 'org.com',
        bio: 'The bestest organization ever!',
        token: '2'
      }
    ]
  };

  it('snapshots Resources', () => {
    const tree = renderer.create(
      <Resources {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
