import React, { Component } from 'react';
import SettingsHeader from '../../Headers/SettingsHeader/SettingsHeader';
import SettingsContent from '../../Contents/SettingsContent/SettingsContent';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';

class SettingsPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <SettingsHeader></SettingsHeader>
        <SettingsContent></SettingsContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default SettingsPage;
