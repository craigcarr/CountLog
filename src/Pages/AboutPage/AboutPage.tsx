import React, { Component } from 'react';
import AboutContent from './AboutContent/AboutContent';
import AboutHeader from './AboutHeader/AboutHeader';

class AboutPage extends Component {
  render() {
    return (
      <React.Fragment>
        <AboutHeader></AboutHeader>
        <AboutContent></AboutContent>
      </React.Fragment>
    );
  }
}

export default AboutPage;
