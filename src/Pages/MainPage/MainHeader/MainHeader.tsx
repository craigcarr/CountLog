import React from "react";
import styles from './MainHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderSettingsButton from "../../../Components/HeaderSettingsButton/HeaderSettingsButton";

export default function MainHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Active Counters</HeaderText>
      <HeaderSettingsButton className={styles.settingsBtn}></HeaderSettingsButton>
    </div>
  );
}
