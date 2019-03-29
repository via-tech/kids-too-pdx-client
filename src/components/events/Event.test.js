import React from 'react';
import renderer from 'react-test-renderer';
import Event from './Event';
import { MemoryRouter } from 'react-router-dom';

describe('Event', () => {
  it('matches snapshot for Event', () => {
    const props = {
      event: {
        _id: 1,
        image: 'image.com',
        time: '2pm',
        name: 'House Event',
        date: new Date().toString(),
        location: {
          venue: 'My House'
        },
        price: 250,
        ageMin: 9,
        ageMax: 12,
        category: 'Art',
        description: 'The bestest event'
      }
    };

    const tree = renderer.create(
      <MemoryRouter>
        <Event {...props} />
      </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
