import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter, RouteComponentProps } from "react-router";
import styles from './CounterHistoryHeader.module.scss';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class CounterHistoryHeader extends Component<IProps, IState> {
  onBackButtonClicked() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={styles.header}>
        <p id={styles.counterViewHeaderText}>Counter History</p>

        <Button id={styles.backBtn} onClick={() => { this.onBackButtonClicked() }} circular icon>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(CounterHistoryHeader);
