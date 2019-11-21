import React, { Component } from 'react';
import CreateContent from '../CreatePage/CreateContent';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class CounterEditContent extends Component<IProps, IState> {
  render() {
    let counterId = parseInt(this.props.match.params['counterId'], 10)

    return (
      <CreateContent id={counterId}></CreateContent>
    )
  }
}

export default withRouter(CounterEditContent);
