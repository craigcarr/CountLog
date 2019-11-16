import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import './CounterEditHeader.css';

class EditHeader extends Component {
  onBackButtonClicked() {
    // @ts-ignore
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="header">
        <p id="counterEditHeaderText">Edit Counter</p>

        <Button onClick={() => { this.onBackButtonClicked() }} circular icon id="counterEditBackBtn">
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

// @ts-ignore
export default withRouter(EditHeader);
