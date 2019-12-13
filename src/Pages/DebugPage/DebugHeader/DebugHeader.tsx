import React from 'react';
import styles from './DebugHeader.module.scss';
import HeaderText from '../../../Components/HeaderText/HeaderText';
import HeaderBackButton from '../../../Components/HeaderBackButton/HeaderBackButton';

export default function DebugHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Debug Log</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
