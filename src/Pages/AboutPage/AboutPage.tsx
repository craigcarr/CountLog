import React, { Component } from 'react';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';
import AboutContent from '../../Contents/AboutContent/AboutContent';
import AboutHeader from '../../Headers/AboutHeader/AboutHeader';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <AboutHeader></AboutHeader>
        <AboutContent></AboutContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default AboutPage;
