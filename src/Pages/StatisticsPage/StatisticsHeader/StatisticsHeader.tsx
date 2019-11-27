import React from "react";
import styles from './StatisticsHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function StatisticsHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Counter Statistics</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
