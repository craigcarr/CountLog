import React, { Component } from 'react';
import CouonterCreateHeader from './CounterCreateHeader/CounterCreateHeader';
import CounterCreateContent from './CounterCreateContent/CounterCreateContent';

interface IProps {}

interface IState {}

class CounterCreatePage extends Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <CouonterCreateHeader></CouonterCreateHeader>
        <CounterCreateContent id={undefined}>
        </CounterCreateContent>
      </React.Fragment>
    );
  }
}

export default CounterCreatePage;
