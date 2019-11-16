import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import './CounterHistoryHeader.css';
import { withRouter } from "react-router";

class CounterHistoryHeader extends Component {
  onBackButtonClicked() {
    // @ts-ignore
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="header">
        <p id="counterViewHeaderText">Counter History</p>

        <Button id="backBtn" onClick={() => { this.onBackButtonClicked() }} circular icon>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

// @ts-ignore
export default withRouter(CounterHistoryHeader);
