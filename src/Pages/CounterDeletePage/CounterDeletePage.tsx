import React, { Component } from 'react';
import CounterDeleteHeader from '../../Headers/CounterDeleteHeader/CounterDeleteHeader';
import CounterDeleteContent from '../../Contents/CounterDeleteContent/CounterDeleteContent';

type Props = {}

type State = {}

class CounterDeletePage extends Component<Props, State> {
  render() {
    return (
      <div>
        <CounterDeleteHeader></CounterDeleteHeader>
        <CounterDeleteContent></CounterDeleteContent>
      </div>
    );
  }
}

export default CounterDeletePage;
