import React, { Component } from 'react';
import CounterDeleteHeader from './CounterDeleteHeader/CounterDeleteHeader';
import CounterDeleteContent from './CounterDeleteContent/CounterDeleteContent';

interface IProps {}

interface IState {}

class CounterDeletePage extends Component<IProps, IState> {
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
