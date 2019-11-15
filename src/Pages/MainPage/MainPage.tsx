import React, { Component } from 'react';
import MainHeader from '../../Headers/MainHeader/MainHeader';
import MainContent from '../../Contents/MainContent/MainContent';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';

type Props = {}

type State = {}

class MainPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <MainHeader></MainHeader>
        <MainContent></MainContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default MainPage;
