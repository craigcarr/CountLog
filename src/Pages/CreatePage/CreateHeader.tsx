import React, { Component } from 'react';
import styles from './CreateHeader.module.scss';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import HeaderText from '../../Components/HeaderText/HeaderText';

class CreateHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Create Counter</HeaderText>

        <Link to="/">
          <Button icon circular id={styles.cancelCounterBtn}>
            <Icon name="cancel">
            </Icon>
          </Button>
        </Link>
      </div>
    )
  }
}

export default CreateHeader;
