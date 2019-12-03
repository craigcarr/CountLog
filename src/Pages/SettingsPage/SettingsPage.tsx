import React from 'react';
import SettingsHeader from './SettingsHeader/SettingsHeader';
import SettingsContent from './SettingsContent/SettingsContent';
import Helmet from 'react-helmet';

export default function SettingsPage() {
  return (
    <React.Fragment>
      <Helmet><title>Settings - CountLog</title></Helmet>
      <SettingsHeader></SettingsHeader>
      <SettingsContent></SettingsContent>
    </React.Fragment>
  );
}
