import {
  seedTestData,
  deleteTestData
} from './seedTestData';
import {
  signIn,
  patchUser,
  getOrgs,
  signUp,
  deactivateOrg,
  activateOrg,
  recoverPass
} from './usersService';

jest.mock('./request.js');

describe('usersService', () => {
  let org = null;
  let inactiveOrg = null;
  let forgetfulUser = null;

  beforeAll(done =>
    seedTestData()
      .then(({ createdOrg, createdInactive, createdForgetful }) => {
        org = createdOrg;
        inactiveOrg = createdInactive;
        forgetfulUser = createdForgetful;
        done();
      })
  );

  afterAll(() => deleteTestData());

  it('signs up an organization', () => {
    expect(org).toEqual({
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
      password: '12345678'
    })
      .then(signedUser => expect(signedUser).toEqual({
        ...org,
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

  it('patches a user', done => {
    const { user, token } = org;
    const updatedUser = {
      _id: user._id,
      token,
      email: 'theorg999@org.com'
    };

    patchUser(updatedUser)
      .then(patchedUser => {
        expect(patchedUser).toEqual({
          ...user,
          email: 'theorg999@org.com'
        });

        org = { ...org, user: patchedUser };
        done();
      });
  });

  it('gets a list of all organizations', () =>
    getOrgs()
      .then(orgs => expect(orgs).toBeDefined())
  );

  it('catches mismatched password', () => {
    const badUser = {
      role: 'org',
      username: 'badUser',
      password: '12345678',
      confirmPassword: '12345679',
      name: 'The Bad Org',
      email: 'badUser@email.com',
      phone: '5551234567',
      street: '1223 Main St.',
      city: 'Portland',
      state: 'OR',
      zipcode: '97203'
    };

    signUp(badUser)
      .then(err => expect(err).toEqual({ error: 'Password does not match' }));
  });

  it('catches weak password', () => {
    const badUser = {
      role: 'org',
      username: 'badUser',
      password: '1234567',
      confirmPassword: '1234567',
      name: 'The Bad Org',
      email: 'badUser@email.com',
      phone: '5551234567',
      street: '1223 Main St.',
      city: 'Portland',
      state: 'OR',
      zipcode: '97203',
    };

    signUp(badUser)
      .then(err => expect(err).toEqual({ error: 'Password must be at least 8 characters' }));
  });

  it('deactivates organization', done => {
    const { user, token } = org;

    deactivateOrg({ _id: user._id, token })
      .then(deactivated => {
        expect(deactivated).toEqual({
          ...user,
          role: 'inactive'
        });

        done();
      });
  });

  it('activates organization', done => {
    const { user, token } = inactiveOrg;

    activateOrg({ stripeToken: 'tok_visa', token })
      .then(activated => {
        expect(activated).toEqual({
          ...user,
          role: 'org',
          stripeToken: 'tok_visa'
        });

        done();
      });
  });

  it('resets forgotten password', done => {
    return recoverPass({
      username: forgetfulUser.user.email,
      adminPassCode: process.env.ADMIN_PASS_CODE
    })
      .then(res => {
        expect(res).toEqual({
          message: 'Temporary password has been sent to forgetfulUser@email.com'
        });

        done();
      });
  });
});
