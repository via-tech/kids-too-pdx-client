import React from 'react';
import EventDetailContainer from '../../containers/events/EventDetailContainer';
import styles from './EventDetail.css';

export default function EventDetail() {
  return (
    <section className={styles.Event}>
      <EventDetailContainer />
    </section>
  );
}
