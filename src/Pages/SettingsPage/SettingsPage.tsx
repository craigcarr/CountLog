import React from 'react';
import SettingsContent from './SettingsContent/SettingsContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';
import HeaderLinkButton from '../../Components/HeaderLinkButton/HeaderLinkButton';

export default function SettingsPage() {
  document.title = "Settings - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>,
          <HeaderLinkButton iconName="question" route="/about"></HeaderLinkButton>
        ]}
        trailing={[]}
        title={"Settings"}
      />
      <SettingsContent></SettingsContent>
    </React.Fragment>
  );
}
