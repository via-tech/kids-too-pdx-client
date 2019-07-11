import React from 'react';
import renderer from 'react-test-renderer';
import SubmitEvent from './SubmitEvent';

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
  it('snapshots SubmitEvent logged in and active', () => {
    const props = {
      orgEvent,
      token: '1234',
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      role: 'org'
    };

    const tree = renderer.create(
      <SubmitEvent {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots SubmitEvent logged out', () => {
    const props = {
      orgEvent,
      token: '',
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      role: 'org',
      history: {
        push(route) {
          return route;
        }
      }
    };

    const tree = renderer.create(
      <SubmitEvent {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('snapshots SubmitEvent logged in and inactive org', () => {
    const props = {
      orgEvent,
      token: '1234',
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      role: 'inactive',
      history: {
        push(route) {
          return route;
        }
      }
    };

    const tree = renderer.create(
      <SubmitEvent {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
