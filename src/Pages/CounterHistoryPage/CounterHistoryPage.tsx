import React, { Component } from 'react';
import CounterHistoryHeader from '../../Headers/CounterHistoryHeader/CounterHistoryHeader';
import CounterHistoryContent from '../../Contents/CounterHistoryContent/CounterHistoryContent';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';

type Props = {}

type State = {}

class CounterHistoryPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <CounterHistoryHeader></CounterHistoryHeader>
        <CounterHistoryContent></CounterHistoryContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default CounterHistoryPage;
