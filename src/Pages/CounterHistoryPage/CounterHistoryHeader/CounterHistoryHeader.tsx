import React from "react";
import styles from './CounterHistoryHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function CounterHistoryHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Counter History</HeaderText>
      <HeaderBackButton className={styles.backBtn}></HeaderBackButton>
    </div>
  );
}
