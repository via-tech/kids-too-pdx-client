import React from 'react';
import renderer from 'react-test-renderer';
import Events from './Events';
import { MemoryRouter } from 'react-router-dom';

describe('Events', () => {
  it('matches snapshot for Events', () => {
    const props = {
      events: [
        {
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
        },
        {
          _id: 2,
          image: 'image.com',
          time: '2pm',
          name: 'House Event',
          date: new Date().toString(),
          location: {
            venue: 'My House'
          },
          price: 150,
          ageMin: 9,
          ageMax: 12,
          category: 'Art',
          description: 'The bestest event'
        },
        {
          _id: 3,
          image: 'image.com',
          time: '2pm',
          name: 'House Event',
          date: new Date().toString(),
          location: {
            venue: 'My House'
          },
          price: 50,
          ageMin: 9,
          ageMax: 12,
          category: 'Art',
          description: 'The bestest event',
          details: true
        }
      ],

      onChange: jest.fn(),

      onSubmit: jest.fn()
    };

    const tree = renderer.create(
      <MemoryRouter>
        <Events {...props} />
      </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
