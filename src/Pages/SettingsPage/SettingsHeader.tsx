import React, { Component } from "react";
import styles from './SettingsHeader.module.scss';
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SettingsHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <p id={styles.settingsHeaderText}>Settings</p>

        <Link to="/">
          <Button id={styles.homeBtn} circular icon>
            <Icon name="arrow left">
            </Icon>
          </Button>
        </Link>

        <Link to="/about">
          <Button id={styles.aboutBtn} circular icon>
            <Icon name="question">
            </Icon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default SettingsHeader;
