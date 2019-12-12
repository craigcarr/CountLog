import React from "react";
import styles from './ReceiverCreateHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function ReceiverCreateHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Add Receiver</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}