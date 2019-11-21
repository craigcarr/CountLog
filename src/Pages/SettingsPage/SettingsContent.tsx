import React, { Component } from 'react';
import { Table, Checkbox, } from 'semantic-ui-react';
import SettingsAPI from '../../Interfaces/SettingsAPI';
import styles from './SettingsContent.module.scss';

interface IProps {}

interface IState {
  isVibrationEnabled: boolean,
  isClickSoundEnabled: boolean,
  isScreenAlwaysOn: boolean,
  isDarkModeEnabled: boolean,
}

class SettingsContent extends Component<IProps, IState> {
  state = {
    isVibrationEnabled: false,
    isClickSoundEnabled: false,
    isScreenAlwaysOn: false,
    isDarkModeEnabled: false,
  }

  constructor(props: any) {
    super(props);

    SettingsAPI.getAllSettings().then((settings) => {
      // TODO Kind of unsafe from TypeScript's perspective.
      function array2dict(array: any): any {
        return array.reduce(
          (map: any, setting: any) => {
            map[setting.name] = setting.value;
            return map;
          },
          {});
      }

      let result = array2dict(settings);

      // TODO Shouldn't call `this.setState` in a constructor.
      this.setState({
        isVibrationEnabled: result['isVibrationEnabled'],
        isClickSoundEnabled: result['isClickSoundEnabled'],
        isScreenAlwaysOn: result['isScreenAlwaysOn'],
        isDarkModeEnabled: result['isDarkModeEnabled'],
      })
    });
  }

  vibrationSettingChanged() {
    let newValue = !this.state.isVibrationEnabled;

    this.setState({ isVibrationEnabled: newValue }, () => {
      SettingsAPI.putSetting({
        name: 'isVibrationEnabled',
        value: this.state.isVibrationEnabled,
      })

      if (newValue === true) {
        window.navigator.vibrate(200);
      }
    })
  }

  clickSoundSettingChanged() {
    if (this.state.isClickSoundEnabled) {
      this.setState({ isClickSoundEnabled: false })
    } else {
      this.setState({ isClickSoundEnabled: true })
      // TODO Make noise
    }
  }

  screenAlwaysOnSettingChanged() {
    if (this.state.isScreenAlwaysOn) {
      this.setState({ isScreenAlwaysOn: false })
    } else {
      this.setState({ isScreenAlwaysOn: true })
      // TODO Some indication of enabling
    }
  }

  darkModeEnabledSettingChanged() {
    if (this.state.isDarkModeEnabled) {
      this.setState({ isDarkModeEnabled: false })
    } else {
      this.setState({ isDarkModeEnabled: true })
      // TODO Theme will change on settings screen
    }
  }

  render() {
    return (
      <div className={styles.content}>
        <Table unstackable columns={2}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Dark Mode</Table.Cell>
              <Table.Cell>
                <Checkbox
                  toggle
                  checked={this.state.isDarkModeEnabled}
                  onChange={() => { this.darkModeEnabledSettingChanged() }}>
                </Checkbox>
                <p>Not yet supported!</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Click Sound
                </Table.Cell>
              <Table.Cell>
                <Checkbox
                  toggle
                  checked={this.state.isClickSoundEnabled}
                  onChange={() => { this.clickSoundSettingChanged() }}>
                </Checkbox>
                <p>Not yet supported!</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Vibration</Table.Cell>
              <Table.Cell>
                <Checkbox
                  toggle
                  checked={this.state.isVibrationEnabled}
                  onChange={() => { this.vibrationSettingChanged() }}>
                </Checkbox>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Screen Always On</Table.Cell>
              <Table.Cell>
                <Checkbox
                  toggle
                  checked={this.state.isScreenAlwaysOn}
                  onChange={() => { this.screenAlwaysOnSettingChanged() }}>
                </Checkbox>
                <p>Not yet supported!</p>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default SettingsContent;
