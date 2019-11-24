import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import styles from './AboutHeader.module.scss';
import HeaderText from '../../../Components/HeaderText/HeaderText';

interface IProps extends RouteComponentProps<any> { }

interface IState { }

class AboutHeader extends Component<IProps, IState> {
  onBackButtonClicked = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>About CountLog</HeaderText>

        <Button icon circular id={styles.backBtn} onClick={this.onBackButtonClicked}>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(AboutHeader);
