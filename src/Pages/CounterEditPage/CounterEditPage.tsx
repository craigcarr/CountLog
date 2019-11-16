import React, { Component } from 'react';
import CounterEditHeader from './CounterEditHeader';
import CounterEditContent from './CounterEditContent';

type Props = {}

type State = {}

class CounterEditPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <CounterEditHeader></CounterEditHeader>
        <CounterEditContent></CounterEditContent>
      </div>
    );
  }
}

export default CounterEditPage;
