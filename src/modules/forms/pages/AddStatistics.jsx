import React from 'react';
import Header from '../components/AddMembers/Header';
import TitleSection from '../components/AddStatistics/TitleSection';
import StatisticsForm from '../components/AddStatistics/StatisticsForm';
import styles from '../components/AddStatistics/AddStatistics.module.css';

const AddStatistics = () => {
  return (
    <main className={styles.mainContent}>
      <Header />
      <TitleSection />
      <StatisticsForm />
    </main>
  );
};

export default AddStatistics;