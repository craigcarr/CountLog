import React, { Component } from 'react';
import AboutContent from '../../Contents/AboutContent/AboutContent';
import AboutHeader from '../../Headers/AboutHeader/AboutHeader';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <AboutHeader></AboutHeader>
        <AboutContent></AboutContent>
      </div>
    );
  }
}

export default AboutPage;
