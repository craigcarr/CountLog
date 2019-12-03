import React from "react";
import styles from './ReceiverListHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function ReceiverListHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Configure Receivers</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
