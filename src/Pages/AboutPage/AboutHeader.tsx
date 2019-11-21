import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import styles from './AboutHeader.module.scss';

class AboutHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <p id={styles.aboutHeaderText}>About CountLog</p>

        <Link to="/settings">
          <Button icon circular id={styles.backBtn}>
            <Icon name="arrow left">
            </Icon>
          </Button>
        </Link>
      </div>
    )
  }
}

export default AboutHeader;
