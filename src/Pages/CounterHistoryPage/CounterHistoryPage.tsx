import React, { Component } from 'react';
import CounterHistoryHeader from './CounterHistoryHeader';
import CounterHistoryContent from './CounterHistoryContent';

interface IProps {}

interface IState {}

class CounterHistoryPage extends Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <CounterHistoryHeader></CounterHistoryHeader>
        <CounterHistoryContent></CounterHistoryContent>
      </React.Fragment>
    );
  }
}

export default CounterHistoryPage;
