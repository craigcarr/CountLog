import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter, RouteComponentProps } from "react-router";
import './CounterHistoryHeader.css';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class CounterHistoryHeader extends Component<IProps, IState> {
  onBackButtonClicked() {
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

export default withRouter(CounterHistoryHeader);
