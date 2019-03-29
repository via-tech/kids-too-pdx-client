import React from 'react';
import renderer from 'react-test-renderer';
import SubmitEvent from './SubmitEvent';

describe('SubmitEvent', () => {
  it('snapshots SubmitEvent', () => {
    const props = {
      _id: 1,
      image: 'image.com',
      time: '2pm',
      name: 'House Event',
      date: new Date().toString(),
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
      ageMin: 9,
      ageMax: 12,
      category: 'Art',
      description: 'The bestest event',
      rrSelect: jest.fn(),
      handleChange: jest.fn(),
      handleSubmit: jest.fn()
    };

    const tree = renderer.create(
      <SubmitEvent {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
