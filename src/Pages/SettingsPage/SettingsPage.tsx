import React from 'react';
import SettingsHeader from './SettingsHeader/SettingsHeader';
import SettingsContent from './SettingsContent/SettingsContent';

export default function SettingsPage() {
  return (
    <React.Fragment>
      <SettingsHeader></SettingsHeader>
      <SettingsContent></SettingsContent>
    </React.Fragment>
  );
}
