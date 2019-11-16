import React, { Component } from 'react';
import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';

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
