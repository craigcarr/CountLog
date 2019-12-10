import React from 'react';
import SettingsHeader from './SettingsHeader/SettingsHeader';
import SettingsContent from './SettingsContent/SettingsContent';

export default function SettingsPage() {
  document.title = "Settings - CountLog";

  return (
    <React.Fragment>
      <SettingsHeader></SettingsHeader>
      <SettingsContent></SettingsContent>
    </React.Fragment>
  );
}
