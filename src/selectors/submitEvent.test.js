import {
  getContact,
  getName,
  getDate,
  getTime,
  getLocation,
  getPrice,
  getReduced,
  getMinAge,
  getMaxAge,
  getCategory,
  getDescription
} from './submitEvent';

describe('submit event selectors', () => {
  const state = {
    submit: {
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
      minAge: 5,
      maxAge: 12,
      category: 'Art',
      description: 'The bestest event ever!!'
    }
  };

  it('gets contact', () => {
    expect(getContact(state)).toEqual({
      contactName: 'Joe',
      email: 'joe@email.com',
      phone: '555-123-4567'
    });
  });

  it('gets name', () => {
    expect(getName(state)).toEqual('The Event');
  });

  it('gets date', () => {
    expect(getDate(state)).toBeDefined();
  });

  it('gets time', () => {
    expect(getTime(state)).toEqual('2pm');
  });

  it('gets location', () => {
    expect(getLocation(state)).toEqual({
      venue: 'My House',
      address: '123 Main St.',
      state: 'OR',
      zipcode: '97223'
    });
  });

  it('gets price', () => {
    expect(getPrice(state)).toEqual(200);
  });

  it('checks if reduced rate available', () => {
    expect(getReduced(state)).toEqual(false);
  });

  it('gets minimum age', () => {
    expect(getMinAge(state)).toEqual(5);
  });

  it('gets maximum age', () => {
    expect(getMaxAge(state)).toEqual(12);
  });

  it('gets category', () => {
    expect(getCategory(state)).toEqual('Art');
  });

  it('gets description', () => {
    expect(getDescription(state)).toEqual('The bestest event ever!!');
  });
});
