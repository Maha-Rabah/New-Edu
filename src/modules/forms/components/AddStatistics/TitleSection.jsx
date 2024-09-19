import React from 'react';
import styles from './AddStatistics.module.css';
import Statistics from '../../assets/1.png'

const TitleSection = () => {
  return (
    <section className={styles.titleSection}>
      <img src={Statistics} alt="" className={styles.titleIcon} />
      <h1>ADD Statistics</h1>
    </section>
  );
};

export default TitleSection;