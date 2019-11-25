import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import MainContent from './MainContent/MainContent';

export default function MainPage() {
  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <MainContent></MainContent>
    </React.Fragment>
  );
}
