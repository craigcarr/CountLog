import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import styles from './AboutHeader.module.scss';
import HeaderText from '../../Components/HeaderText/HeaderText';

class AboutHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>About CountLog</HeaderText>

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
