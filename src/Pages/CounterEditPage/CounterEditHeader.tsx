import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import styles from './CounterEditHeader.module.scss';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class EditHeader extends Component<IProps, IState> {
  onBackButtonClicked() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={styles.header}>
        <p id={styles.counterEditHeaderText}>Edit Counter</p>

        <Button
          onClick={() => { this.onBackButtonClicked() }}
          circular
          icon
          id={styles.counterEditBackBtn}>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(EditHeader);
