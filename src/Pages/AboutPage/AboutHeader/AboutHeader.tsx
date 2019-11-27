import React from 'react';
import styles from './AboutHeader.module.scss';
import HeaderText from '../../../Components/HeaderText/HeaderText';
import HeaderBackButton from '../../../Components/HeaderBackButton/HeaderBackButton';

export default function AboutHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>About CountLog</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
