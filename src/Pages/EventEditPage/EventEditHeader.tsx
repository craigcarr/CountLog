import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter, RouteComponentProps } from "react-router";
import styles from './EventEditHeader.module.scss';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class EventEditHeader extends Component<IProps, IState> {
  onBackButtonClicked() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={styles.header}>
        <p id={styles.eventEditHeaderText}>Edit Event</p>

        <Button id={styles.eventEditBackBtn} onClick={() => {this.onBackButtonClicked()}} circular icon>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(EventEditHeader);
