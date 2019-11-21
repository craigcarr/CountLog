import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from './MainHeader.module.scss';

class MainHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <p id={styles.mainHeaderText}>Active Counters</p>

        <Link to="/settings">
          <Button circular icon id={styles.settingsBtn}>
            <Icon name="settings">
            </Icon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default MainHeader;
