import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader';
import MainContent from './MainContent/MainContent';

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
