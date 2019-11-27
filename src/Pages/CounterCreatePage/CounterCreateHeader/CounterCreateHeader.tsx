import React from 'react';
import styles from './CounterCreateHeader.module.scss';
import HeaderText from '../../../Components/HeaderText/HeaderText';
import HeaderBackButton from '../../../Components/HeaderBackButton/HeaderBackButton';

export default function CounterCreateHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Create Counter</HeaderText>
      <HeaderBackButton className={styles.cancelBtn} iconName="cancel"></HeaderBackButton>
    </div>
  );
}
