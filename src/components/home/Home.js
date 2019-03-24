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
  description: 'family fun day'
}];
function Home() {
  return (
    <section className={styles.Home}>
      <Events events={data} />
    </section>
  );
}
export default Home;
