import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router";
import './EventEditHeader.css';

class EventEditHeader extends Component {
  onBackButtonClicked() {
    // @ts-ignore
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

// @ts-ignore
export default withRouter(EventEditHeader);
