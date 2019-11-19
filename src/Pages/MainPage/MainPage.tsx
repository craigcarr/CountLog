import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

interface IProps {}

interface IState {}

class MainPage extends Component<IProps, IState> {
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
