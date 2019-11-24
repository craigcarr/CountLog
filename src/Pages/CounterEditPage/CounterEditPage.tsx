import React, { Component } from 'react';
import CounterEditHeader from './CounterEditHeader/CounterEditHeader';
import CounterEditContent from './CounterEditContent/CounterEditContent';

interface IProps {}

interface IState {}

class CounterEditPage extends Component<IProps, IState> {
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
