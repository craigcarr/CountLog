import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

type Props = {}

type State = {}

class MainPage extends Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <MainHeader></MainHeader>
        <MainContent></MainContent>
      </React.Fragment>
    );
  }
}

export default MainPage;
