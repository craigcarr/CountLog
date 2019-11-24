import React, { Component } from 'react';
import styles from './CreateHeader.module.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import HeaderText from '../../Components/HeaderText/HeaderText';

interface IProps extends RouteComponentProps<any> { }

interface IState { }

class CreateHeader extends Component<IProps, IState> {
  onCancelButtonClicked = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Create Counter</HeaderText>

        <Button icon circular id={styles.cancelCounterBtn} onClick={this.onCancelButtonClicked}>
          <Icon name="cancel">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(CreateHeader);
