const users = [
  {
    _id: '0',
    role: 'org',
    username: 'org1',
    password: 'org1pass',
    name: 'The Org1',
    token: '0'
  },
  {
    _id: '1',
    role: 'org',
    username: 'org2',
    password: 'org2pass',
    name: 'The Org2',
    token: '1'
  },
  {
    _id: '2',
    role: 'org',
    username: 'org3',
    password: 'org3pass',
    name: 'The Org3',
    token: '2'
  }
];

export const signUp = user => {
  user._id = users.length - 1;
  user.token = user._id;
  users.push(user);
  return Promise.resolve(user.token);
};

export const signIn = ({ username, password }) => Promise.resolve(users.find(user => user.username === username && user.password === password).token);
