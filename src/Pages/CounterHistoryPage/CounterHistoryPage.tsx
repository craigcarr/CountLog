import React, { Component } from 'react';
import CounterHistoryHeader from './CounterHistoryHeader';
import CounterHistoryContent from './CounterHistoryContent';

type Props = {}

type State = {}

class CounterHistoryPage extends Component<Props, State> {
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
