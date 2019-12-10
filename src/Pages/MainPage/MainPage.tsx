import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import MainContent from './MainContent/MainContent';

export default function MainPage() {
  document.title = "Main - CountLog";

  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <MainContent></MainContent>
    </React.Fragment>
  );
}
