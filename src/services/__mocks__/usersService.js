const users = [
  {
    _id: '0',
    role: 'org',
    username: 'org1',
    password: 'org1pass',
    name: 'The Org1',
    email: 'org1@email.com',
    phone: '555-123-4567',
    address: {
      street: '123 Main St.',
      city: 'Portland',
      zipcode: '97203'
    },
    logo: 'org.com',
    bio: 'The bestest organization ever!',
    token: '0'
  },
  {
    _id: '1',
    role: 'org',
    username: 'org2',
    password: 'org2pass',
    name: 'The Org2',
    email: 'org2@email.com',
    phone: '555-123-4567',
    address: {
      street: '123 Main St.',
      city: 'Portland',
      zipcode: '97203'
    },
    logo: 'org.com',
    bio: 'The bestest organization ever!',
    token: '1'
  },
  {
    _id: '2',
    role: 'org',
    username: 'org3',
    password: 'org3pass',
    name: 'The Org3',
    email: 'org3@email.com',
    phone: '555-123-4567',
    address: {
      street: '123 Main St.',
      city: 'Portland',
      zipcode: '97203'
    },
    logo: 'org.com',
    bio: 'The bestest organization ever!',
    token: '2'
  },
  {
    _id: '3',
    role: 'admin',
    username: 'admin',
    password: 'adminpass',
    name: 'The Admin',
    email: 'admin@email.com',
    phone: '555-123-4567',
    address: {
      street: '123 Main St.',
      city: 'Portland',
      zipcode: '97203'
    },
    logo: 'admin.com',
    bio: 'The bestest organization ever!',
    token: '3'
  }
];

export const signUp = user => {
  user._id = users.length - 1;
  user.token = user._id;
  users.push(user);
  return Promise.resolve(user.token);
};

export const signIn = ({ username, password }) => Promise.resolve(users.find(user => user.username === username && user.password === password).token);

export const getOrgs = () => Promise.resolve(users.map(user => {
  if(user.role === 'org') return user;
}));
