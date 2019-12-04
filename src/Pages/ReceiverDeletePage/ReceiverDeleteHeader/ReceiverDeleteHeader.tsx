import React from "react";
import styles from './ReceiverDeleteHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function ReceiverDeleteHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Delete Receiver</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
