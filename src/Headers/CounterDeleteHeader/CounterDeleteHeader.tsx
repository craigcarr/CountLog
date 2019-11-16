import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import './CounterDeleteHeader.css';
import { withRouter } from "react-router";

class CounterDeleteHeader extends Component {
  onBackButtonClicked() {
    // @ts-ignore
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="header">
        <p id="counterDeleteHeaderText">Delete Counter</p>

        <Button id="backBtn" onClick={() => {this.onBackButtonClicked()}} circular icon>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

// @ts-ignore
export default withRouter(CounterDeleteHeader);
