import React from 'react';
import renderer from 'react-test-renderer';
import AdminEvents from './AdminEvents';

describe('AdminEvents', () => {
  it('matches a snapshot for admin events', () => {
    const events = [
      {
        _id: 1,
        venue: 'My House',
        name: 'House Event'
      },
      {
        _id: 2,
        venue: 'My Other House',
        name: 'Other House Event'
      },
      {
        _id: 3,
        venue: 'My Another Other House',
        name: 'Another Other House Event'
      }
    ];

    const tree = renderer.create(
      <AdminEvents events={events} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
