import {
  seedTestData,
  deleteTestData } from './seedTestData';
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
        username: 'theOrg999',
        role: 'org',
        name: 'The Org',
        email: 'theorg999@email.com',
        phone: '5551234567',
        address: {
          street: '1223 Main St.',
          city: 'Portland',
          state: 'OR',
          zipcode: '97203'
        }
      },
      token: expect.any(String)
    });
  });

  it('signs in an organization', () =>
    signIn({
      username: 'theOrg999',
      password: 'passit'
    })
      .then(signedUser => expect(signedUser).toEqual({
        ...user,
        token: expect.any(String)
      }))
  );

  it('rejects user with wrong sign in', () => {
    signIn({
      username: 'blahUser',
      password: 'passit'
    })
      .then(res => expect(res).toEqual({ error: 'Bad email or password' }));
  });

  it('patches a user', () => {
    const updatedUser = {
      _id: user.user._id,
      token: user.token,
      email: 'theorg999@org.com'
    };

    patchUser(updatedUser)
      .then(patchedUser => expect(patchedUser).toEqual({
        ...user.user,
        email: 'theorg999@org.com'
      }));
  });

  it('gets a list of all organizations', () =>
    getOrgs()
      .then(orgs => expect(orgs).toBeDefined())
  );
});
