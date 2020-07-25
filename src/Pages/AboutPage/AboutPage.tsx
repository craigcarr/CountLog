import React from 'react';
import AboutContent from './AboutContent/AboutContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function AboutPage() {
  document.title = "About - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"About CountLog"}
      />
      <AboutContent></AboutContent>
    </React.Fragment>
  );
}
