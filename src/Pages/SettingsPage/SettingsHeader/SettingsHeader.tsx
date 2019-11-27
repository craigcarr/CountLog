import React from "react";
import styles from './SettingsHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";
import HeaderLinkButton from "../../../Components/HeaderLinkButton/HeaderLinkButton";

export default function SettingsHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Settings</HeaderText>
      <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
      <HeaderLinkButton className={styles.aboutBtn} iconName="question" route="/about"></HeaderLinkButton>
    </div>
  );
}
