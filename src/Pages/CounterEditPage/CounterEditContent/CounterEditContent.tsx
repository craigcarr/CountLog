import React, { Component } from 'react';
import CounterCreateContent from '../../CounterCreatePage/CounterCreateContent/CounterCreateContent';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class CounterEditContent extends Component<IProps, IState> {
  render() {
    let counterId = parseInt(this.props.match.params['counterId'], 10)

    return (
      <CounterCreateContent id={counterId}></CounterCreateContent>
    )
  }
}

export default withRouter(CounterEditContent);
