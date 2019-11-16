import React, { Component } from 'react';
import CounterHistoryHeader from '../../Headers/CounterHistoryHeader/CounterHistoryHeader';
import CounterHistoryContent from '../../Contents/CounterHistoryContent/CounterHistoryContent';

type Props = {}

type State = {}

class CounterHistoryPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <CounterHistoryHeader></CounterHistoryHeader>
        <CounterHistoryContent></CounterHistoryContent>
      </div>
    );
  }
}

export default CounterHistoryPage;
