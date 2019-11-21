import React, { Component } from 'react';
import styles from './CreateHeader.module.scss';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

class CreateHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <p id={styles.createHeaderText}>Create Counter</p>

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
