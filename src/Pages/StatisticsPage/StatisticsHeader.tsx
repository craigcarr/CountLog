import React, { Component } from "react";
import styles from './StatisticsHeader.module.scss';
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

class StatisticsHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <p id={styles.statisticsHeaderText}>Counter Statistics</p>

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
