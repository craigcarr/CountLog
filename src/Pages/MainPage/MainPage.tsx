import React, { Component } from 'react';
import MainHeader from '../../Headers/MainHeader/MainHeader';
import MainContent from '../../Contents/MainContent/MainContent';

type Props = {}

type State = {}

class MainPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <MainHeader></MainHeader>
        <MainContent></MainContent>
      </div>
    );
  }
}

export default MainPage;
