import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter, RouteComponentProps } from "react-router";
import './EventEditHeader.css';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class EventEditHeader extends Component<IProps, IState> {
  onBackButtonClicked() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="header">
        <p id="eventEditHeaderText">Edit Event</p>

        <Button id="eventEditBackBtn" onClick={() => {this.onBackButtonClicked()}} circular icon>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(EventEditHeader);
