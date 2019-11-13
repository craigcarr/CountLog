import React, { Component } from 'react';
import MainHeader from '../../Headers/MainHeader/MainHeader';
import MainContent from '../../Contents/MainContent/MainContent';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';
import CounterDatabase from '../../CounterDatabase';

type Props = {
  db: CounterDatabase,
}

type State = {}

class MainPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <MainHeader></MainHeader>
        <MainContent db={this.props.db}></MainContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default MainPage;
