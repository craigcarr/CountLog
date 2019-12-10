import React from 'react';
import AboutContent from './AboutContent/AboutContent';
import AboutHeader from './AboutHeader/AboutHeader';

export default function AboutPage() {
  document.title = "About - CountLog";

  return (
    <React.Fragment>
      <AboutHeader></AboutHeader>
      <AboutContent></AboutContent>
    </React.Fragment>
  );
}
