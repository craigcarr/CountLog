import React from 'react';
import styles from './CounterCreateHeader.module.scss';
import HeaderText from '../../../Components/HeaderText/HeaderText';
import HeaderCancelButton from '../../../Components/HeaderCancelButton/HeaderCancelButton';

export default function CounterCreateHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Create Counter</HeaderText>
      <HeaderCancelButton className={styles.cancelBtn}></HeaderCancelButton>
    </div>
  );
}
