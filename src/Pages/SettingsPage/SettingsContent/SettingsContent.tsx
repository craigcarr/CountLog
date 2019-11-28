import React, { useState, useEffect } from 'react';
import { Table, Checkbox, } from 'semantic-ui-react';
import SettingsAPI from '../../../Interfaces/SettingsAPI';
import styles from './SettingsContent.module.scss';

export default function SettingsContent() {
  const [isVibrationEnabled, setVibrationEnabled] = useState<boolean>(false);
  const [isClickSoundEnabled, setClickSoundEnabled] = useState<boolean>(false);
  const [isScreenAlwaysOn, setScreenAlwaysOn] = useState<boolean>(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);

  useEffect(() => {
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

      setVibrationEnabled(result['isVibrationEnabled']);
      setClickSoundEnabled(result['isClickSoundEnabled']);
      setScreenAlwaysOn(result['isScreenAlwaysOn']);
      setDarkModeEnabled(result['isDarkModeEnabled']);
    });
  }, []);

  function vibrationSettingChanged() {
    let newValue = !isVibrationEnabled;

    setVibrationEnabled(newValue);

    SettingsAPI.putSetting({
      name: 'isVibrationEnabled',
      value: newValue,
    })

    if (newValue === true) {
      window.navigator.vibrate(200);
    }
  }

  function clickSoundSettingChanged() {
    // TODO Make noise
    setClickSoundEnabled(!isClickSoundEnabled)
  }

  function screenAlwaysOnSettingChanged() {
    // TODO Some indication of enabling
    setScreenAlwaysOn(!isScreenAlwaysOn)
  }

  function darkModeEnabledSettingChanged() {
    // TODO Theme will change on settings screen
    setDarkModeEnabled(!isDarkModeEnabled);
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Dark Mode</p>
            </Table.Cell>
            <Table.Cell>
              <Checkbox
                className={styles.checkBox}
                toggle
                checked={isDarkModeEnabled}
                onChange={darkModeEnabledSettingChanged}>
              </Checkbox>
              <p>Not yet supported!</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Click Sound</p>
            </Table.Cell>
            <Table.Cell>
              <Checkbox
                className={styles.checkBox}
                toggle
                checked={isClickSoundEnabled}
                onChange={clickSoundSettingChanged}>
              </Checkbox>
              <p>Not yet supported!</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Vibration</p>
            </Table.Cell>
            <Table.Cell>
              <Checkbox
                className={styles.checkBox}
                toggle
                checked={isVibrationEnabled}
                onChange={vibrationSettingChanged}>
              </Checkbox>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Screen Always On</p>
            </Table.Cell>
            <Table.Cell>
              <Checkbox
                className={styles.checkBox}
                toggle
                checked={isScreenAlwaysOn}
                onChange={screenAlwaysOnSettingChanged}>
              </Checkbox>
              <p>Not yet supported!</p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
