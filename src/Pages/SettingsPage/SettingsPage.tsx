import React, { Component } from 'react';
import SettingsHeader from './SettingsHeader';
import SettingsContent from './SettingsContent';

type Props = {}

type State = {}

class SettingsPage extends Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <SettingsHeader></SettingsHeader>
        <SettingsContent></SettingsContent>
      </React.Fragment>
    );
  }
}

export default SettingsPage;
