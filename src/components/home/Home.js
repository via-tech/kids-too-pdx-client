import React from 'react';
import styles from './Home.css';
import HomeContainer from '../../containers/events/HomeContainer';

function Home() {
  return (
    <section className={styles.Home}>
      <HomeContainer />    
    </section>
  );
}

export default Home;
