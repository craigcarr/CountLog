import React, { Component } from 'react';
import SettingsHeader from './SettingsHeader/SettingsHeader';
import SettingsContent from './SettingsContent/SettingsContent';

interface IProps {}

interface IState {}

class SettingsPage extends Component<IProps, IState> {
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
