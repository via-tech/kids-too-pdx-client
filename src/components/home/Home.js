import React from 'react';
import Events from '../events/Events';
import styles from './Home.css';

const data = [{
  name: 'Family Fun',
  date: '4/1/2019',
  time: '2pm',
  location: { address: 'Cathedral Park' },
  cost: 'free',
  age: 'all ages',
  description: 'family fun day',
  picture: 'https://cff2.earth.com/uploads/2018/07/25115124/Kids-now-spend-twice-as-much-time-playing-indoors-than-outdoors.jpg'
}];
function Home() {
  return (
    <section className={styles.Home}>
      <Events events={data} />
    </section>
  );
}
export default Home;
