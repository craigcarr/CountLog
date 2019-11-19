import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import './CounterEditHeader.css';

interface Props extends RouteComponentProps<any> {}

interface State {}

class EditHeader extends Component<Props, State> {
  onBackButtonClicked() {
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

export default withRouter(EditHeader);
