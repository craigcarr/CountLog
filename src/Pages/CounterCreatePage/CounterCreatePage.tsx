import React, { Component } from 'react';
import CounterCreateHeader from './CounterCreateHeader/CounterCreateHeader';
import CounterCreateContent from './CounterCreateContent/CounterCreateContent';

interface IProps {}

interface IState {}

class CounterCreatePage extends Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <CounterCreateHeader></CounterCreateHeader>
        <CounterCreateContent id={undefined}>
        </CounterCreateContent>
      </React.Fragment>
    );
  }
}

export default CounterCreatePage;
