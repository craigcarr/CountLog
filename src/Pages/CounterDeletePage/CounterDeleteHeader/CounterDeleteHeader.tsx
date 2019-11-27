import React, { Component } from "react";
import styles from './CounterDeleteHeader.module.scss';
import HeaderText from "../../../Components/HeaderText/HeaderText";
import HeaderBackButton from "../../../Components/HeaderBackButton/HeaderBackButton";

class CounterDeleteHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Delete Counter</HeaderText>
        <HeaderBackButton className={styles.backBtn} iconName="arrow left"></HeaderBackButton>
      </div>
    )
  }
}

export default CounterDeleteHeader;
