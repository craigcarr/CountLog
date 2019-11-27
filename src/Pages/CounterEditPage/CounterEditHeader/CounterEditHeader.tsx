import React from "react";
import styles from './CounterEditHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function EditHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Edit Counter</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
