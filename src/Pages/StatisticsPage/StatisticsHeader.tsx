import React, { Component } from "react";
import styles from './StatisticsHeader.module.scss';
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import HeaderText from "../../Components/HeaderText/HeaderText";

class StatisticsHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Counter Statistics</HeaderText>

        <Link to="/">
          <Button id={styles.homeBtn} circular icon>
            <Icon name="arrow left">
            </Icon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default StatisticsHeader;
