import React from "react";
import styles from './MainHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderLinkButton from "../../../Components/HeaderLinkButton/HeaderLinkButton";

export default function MainHeader() {
  return (
    <div className={styles.header}>
      <HeaderText className={styles.headerText}>Active Counters</HeaderText>
      <HeaderLinkButton className={styles.settingsBtn} iconName="settings" route="/settings"></HeaderLinkButton>
    </div>
  );
}
