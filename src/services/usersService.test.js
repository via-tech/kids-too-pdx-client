import { seedTestData, deleteTestData } from './seedTestData';
import {
  signIn,
  patchUser,
  getOrgs
} from './usersService';

jest.mock('./request.js');

describe('usersService', () => {
  let user = null;

  beforeAll(done =>
    seedTestData()
      .then(({ createdUser }) => {
        user = createdUser;
        done();
      })
  );

  afterAll(() => deleteTestData());

  it('signs up an organization', () => {
    expect(user).toEqual({
      user: {
        _id: expect.any(String),
        username: 'theOrg123',
        role: 'org',
        name: 'The Org',
        email: 'theorg123@email.com',
        phone: '5551234567',
        address: {
          street: '123 Main St.',
          city: 'Portland',
          state: 'OR',
          zipcode: '97203'
        }
      },
      token: expect.any(String)
    });
  });

  it('signs in an organization', () =>
    signIn({ username: 'theOrg123', password: 'passit' })
      .then(signedUser => expect(signedUser).toEqual({
        ...user,
        token: expect.any(String)
      }))
  );

  it('patches a user', () => {
    const updatedUser = {
      _id: user.user._id,
      token: user.token,
      email: 'theorg123@org.com'
    };

    patchUser(updatedUser)
      .then(patchedUser => expect(patchedUser).toEqual({
        ...user.user,
        email: 'theorg123@org.com'
      }));
  });

  it('gets a list of all organizations', () =>
    getOrgs()
      .then(orgs => expect(orgs).toBeDefined())
  );
});
