import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import './CounterDeleteHeader.css';
import { withRouter, RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class CounterDeleteHeader extends Component<IProps, IState> {
  onBackButtonClicked() {
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

export default withRouter(CounterDeleteHeader);
