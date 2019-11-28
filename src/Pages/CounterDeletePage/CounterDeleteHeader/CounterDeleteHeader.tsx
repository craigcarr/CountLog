import React from "react";
import styles from './CounterDeleteHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function CounterDeleteHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Delete Counter</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
