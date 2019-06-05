import React from 'react';
import renderer from 'react-test-renderer';
import SubmitEvent from './SubmitEvent';
import { MemoryRouter } from 'react-router-dom';

describe('SubmitEvent', () => {
  const orgEvent = {
    _id: 1,
    image: 'image.com',
    time: '2pm',
    name: 'House Event',
    date: new Date(2019, 6, 1, 10, 30).toString(),
    contact: {
      contactName: 'Joe',
      email: 'joe@email.com',
      phone: '555-123-4567'
    },
    location: {
      venue: 'My House',
      address: '123 Main St.',
      city: 'Portland',
      state: 'OR',
      zipcode: 97223
    },
    price: 250,
    reducedRate: false,
    ageMin: 9,
    ageMax: 12,
    category: 'Art',
    description: 'The bestest event',
    liability: true
  };
  it('snapshots SubmitEvent logged in', () => {
    orgEvent.token = '1234';
    const props = {
      orgEvent,
      handleChange: jest.fn(),
      handleSubmit: jest.fn()
    };

    const tree = renderer.create(
      <MemoryRouter>
        <SubmitEvent {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots SubmitEvent logged out', () => {
    orgEvent.token = '';
    const props = {
      orgEvent,
      handleChange: jest.fn(),
      handleSubmit: jest.fn()
    };

    const tree = renderer.create(
      <MemoryRouter>
        <SubmitEvent {...props} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
