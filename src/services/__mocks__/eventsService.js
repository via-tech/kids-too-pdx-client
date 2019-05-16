const events = [
  { 'image':'https://webstockreview.net/images/art-clipart-art-exhibit-15.jpg', '_id':'5c9e4b46fb1ceb1775372e39', 'name':'Animation - Stop Motion ', 'date':'2019-04-07T07:00:00.000Z', 'location':{ 'venue':'Multnomah Arts Ctr' }, 'ageMin':8, 'ageMax':14, 'time':'1pm - 3pm', 'price':150, 'category':'Art', 'pending':false, 'website':'https://apm.activecommunities.com/portlandparks/Activity_Search' }, { 'image':'https://webstockreview.net/images/art-clipart-art-exhibit-15.jpg', '_id':'5c9e4b46fb1ceb1775372e3a', 'name':'Animation - Stop Motion ', 'date':'2019-05-12T07:00:00.000Z', 'location':{ 'venue':'Multnomah Arts Ctr' }, 'ageMin':8, 'ageMax':14, 'time':'1pm - 3pm', 'price':120, 'category':'Art', 'pending':false, 'website':'https://apm.activecommunities.com/portlandparks/Activity_Search' }, { 'image':'https://webstockreview.net/images/art-clipart-art-exhibit-15.jpg', '_id':'5c9e4b46fb1ceb1775372e3b', 'name':'Cartooning ', 'date':'2019-04-04T07:00:00.000Z', 'location':{ 'venue':'Multnomah Arts Ctr' }, 'ageMin':8, 'ageMax':14, 'time':'4:45pm - 6:15pm', 'price':100, 'category':'Art', 'pending':false, 'website':'https://apm.activecommunities.com/portlandparks/Activity_Search' }, { 'image':'https://lighthousementoring.co.uk/wp-content/uploads/2017/08/educational-mentoring-cornwall.jpeg', '_id':'5c9e4b46fb1ceb1775372e97', 'name':'SAT: Evidence-based Reading & Writing ', 'date':'2019-05-20T07:00:00.000Z', 'location':{ 'venue':'Portland State University' }, 'price':235, 'ageMin':14, 'ageMax':16, 'description':'Enhance your comprehension, reasoning, revising and editing skills in a variety of content areas. Learn about the optional essay section. Work with test prep professionals to strengthen your use of text complexity, evidence-informed analyses, informational graphics and appropriate word choice. Use practice exams, directed feedback and get individualized support in specified areas.', 'category':'Educational', 'pending':false, 'website':'https://www.saturdayacademy.org/#Classes--Camps' }, { 'image':'https://lighthousementoring.co.uk/wp-content/uploads/2017/08/educational-mentoring-cornwall.jpeg', '_id':'5c9e4b46fb1ceb1775372e99', 'name':'Speech Easy: Find Your Voice ', 'date':'2019-05-20T07:00:00.000Z', 'location':{ 'venue':'Portland State University' }, 'price':185, 'ageMin':12, 'ageMax':15, 'description':'Learn effective speaking techniques in a supportive space. Explore spontaneous speaking skills and longer, crafted pieces. Learn how to speak clearly and to the point, and gain confidence in presenting in front of a group.', 'category':'Educational', 'pending':false, 'website':'https://www.saturdayacademy.org/#Classes--Camps' }
];

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

export const postEvent = event => Promise.resolve(event);

export const getEvents = () => Promise.resolve(events);

export const getFilteredEvents = filters => {
  let route = '/events/query/q?';
  Object.keys(filters).every(key => {
    return filters[key] ? route += `${key}=${filters[key]}&` : route;
  });
  return Promise.resolve(route);
};

export const getEvent = id => Promise.resolve(events.find(event => event._id === id));

export const signUp = user => {
  user._id = users.length - 1;
  user.token = user._id;
  users.push(user);
  return Promise.resolve(user.token);
};

export const signIn = ({ username, password }) => Promise.resolve(users.find(user => user.username === username && user.password === password).token);
