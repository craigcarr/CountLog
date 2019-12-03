import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import MainContent from './MainContent/MainContent';
import Helmet from 'react-helmet';

export default function MainPage() {
  return (
    <React.Fragment>
      <Helmet><title>Main - CountLog</title></Helmet>
      <MainHeader></MainHeader>
      <MainContent></MainContent>
    </React.Fragment>
  );
}
