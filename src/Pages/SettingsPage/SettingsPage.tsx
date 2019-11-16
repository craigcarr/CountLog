import React, { Component } from 'react';
import SettingsHeader from '../../Headers/SettingsHeader/SettingsHeader';
import SettingsContent from '../../Contents/SettingsContent/SettingsContent';

type Props = {}

type State = {}

class SettingsPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <SettingsHeader></SettingsHeader>
        <SettingsContent></SettingsContent>
      </div>
    );
  }
}

export default SettingsPage;
