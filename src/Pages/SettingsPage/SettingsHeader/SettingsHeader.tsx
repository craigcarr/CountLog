import React from "react";
import styles from './SettingsHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";
import HeaderAboutButton from "../../../Components/HeaderAboutButton/HeaderAboutButton";

export default function SettingsHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Settings</HeaderText>
      <HeaderBackButton className={styles.backBtn}></HeaderBackButton>
      <HeaderAboutButton className={styles.aboutBtn}></HeaderAboutButton>
    </div>
  );
}
