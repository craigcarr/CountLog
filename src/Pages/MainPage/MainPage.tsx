import React from 'react';
import MainContent from './MainContent/MainContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderLinkButton from '../../Components/HeaderLinkButton/HeaderLinkButton';

export default function MainPage() {
  document.title = "Main - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[]}
        trailing={[
          <HeaderLinkButton iconName="settings" route="/settings"></HeaderLinkButton>
        ]}
        title={"Counters List"}
      />
      <MainContent></MainContent>
    </React.Fragment>
  );
}
