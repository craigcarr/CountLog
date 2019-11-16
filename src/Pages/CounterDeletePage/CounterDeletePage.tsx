import React, { Component } from 'react';
import CounterDeleteHeader from './CounterDeleteHeader';
import CounterDeleteContent from './CounterDeleteContent';

type Props = {}

type State = {}

class CounterDeletePage extends Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <CounterDeleteHeader></CounterDeleteHeader>
        <CounterDeleteContent></CounterDeleteContent>
      </React.Fragment>
    );
  }
}

export default CounterDeletePage;
