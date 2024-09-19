import React from 'react';
import styles from './AddStatistics.module.css';

const StatisticsForm = () => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formRow}>
        <div className={styles.formColumn}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.inputLabel}>Name</label>
            <input type="text" id="name" className={styles.inputField} />
          </div>
        </div>
        <div className={styles.formColumn}>
          <div className={styles.inputGroup}>
            <label htmlFor="count" className={styles.inputLabel}>Count</label>
            <input type="number" id="count" className={styles.inputField} />
          </div>
        </div>
      </div>

      {}
      <label htmlFor="type" className={styles.typeLabel}>Type</label>

      {}
      <select id="type" className={styles.typeSelect}>
        <option value="type1">Home</option>
        <option value="type2">EDUmentoring</option>
        <option value="type3">EDUlens</option>
        <option value="type4">EDUcounseling</option>
      </select>

      {}
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>

  );
};

export default StatisticsForm;