import React from 'react';
import AboutContent from './AboutContent/AboutContent';
import AboutHeader from './AboutHeader/AboutHeader';
import Helmet from 'react-helmet';

export default function AboutPage() {
  return (
    <React.Fragment>
      <Helmet><title>About - CountLog</title></Helmet>
      <AboutHeader></AboutHeader>
      <AboutContent></AboutContent>
    </React.Fragment>
  );
}
