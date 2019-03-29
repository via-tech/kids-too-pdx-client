import React from 'react';
import styles from './AboutUs.css';
import shabaPic from '../../../public/assets/shaba.jpg';
import deePic from '../../../public/assets/dee.jpg';
import teonnaPic from '../../../public/assets/teonna.jpg';

function AboutUs() {
  return (
    <section className={styles.AboutUs}>
      <section>
        <h2>Dyanna Tolman</h2>
        <img src={deePic} alt="profile pic of a woman in flowers"/>
        <p>Dyanna Tolman is a Full Stack Software Developer with a background in Product Development. She has a BA in Communications and she loves traveling and meeting people from various backgrounds and cultures. She is a mother of a 12 year old and one of her favorite pastime is seeking and planning  activities with her 12 year old, especially ones that involves food</p>
      </section>
      <section>
        <h2>Shaba Rahavi</h2>
        <img src={shabaPic} alt="profile picture of a woman"/>
        <p>Shaba is a Full Stack Software Engineer with a focus on increasing the effectiveness of development through collaboration with others, and building re-usable, sustainable code. She comes from a background in Film production and various community building activities with youth and children, and hopes to continuously apply learnings gained from those experiences throughout her software development career.</p>
      </section>
      <section>
        <h2>Teonna Zaragoza</h2>
        <img src={teonnaPic} alt="profile pic of a woman"/>
        <p>Teonna is a Full Stack Javascript Developer with a background in nursing and is an ultra runner. Her previous experiences on a multidisciplinary team has helped develop strong communication skills, ability to collaborate and a desire to be ever learning. She looks forward to working on a team whose core values closely align to create projects for the betterment of the community. </p>
      </section>
    </section>
  );
}

export default AboutUs;
