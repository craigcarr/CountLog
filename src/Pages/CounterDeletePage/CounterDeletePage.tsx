import React, { Component } from 'react';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';
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
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default CounterDeletePage;
