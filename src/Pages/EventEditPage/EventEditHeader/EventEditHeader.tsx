import React from "react";
import styles from './EventEditHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

export default function EventEditHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Edit Event</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
    </div>
  );
}
