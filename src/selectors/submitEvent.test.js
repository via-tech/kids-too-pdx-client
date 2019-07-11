import { getEvent, getError } from './submitEvent';

describe('submit event selectors', () => {
  const state = {
    submit: {
      event: {
        contact: {
          contactName: 'Joe',
          email: 'joe@email.com',
          phone: '555-123-4567'
        },
        name: 'The Event',
        date: Date.now(),
        time: '2pm',
        location: {
          venue: 'My House',
          address: '123 Main St.',
          state: 'OR',
          zipcode: '97223'
        },
        price: 200,
        reducedRate: false,
        eventInsurance: false,
        minAge: 5,
        maxAge: 12,
        category: 'Art',
        description: 'The bestest event ever!!'
      },
      
      error: 'Liability required'
    }
  };

  it('gets event', () => {
    expect(getEvent(state)).toEqual({
      contact: {
        contactName: 'Joe',
        email: 'joe@email.com',
        phone: '555-123-4567'
      },
      name: 'The Event',
      date: expect.any(Number),
      time: '2pm',
      location: {
        venue: 'My House',
        address: '123 Main St.',
        state: 'OR',
        zipcode: '97223'
      },
      price: 200,
      reducedRate: false,
      eventInsurance: false,
      minAge: 5,
      maxAge: 12,
      category: 'Art',
      description: 'The bestest event ever!!'
    });
  });

  it('gets error', () =>
    expect(getError(state)).toEqual('Liability required')
  );
});
