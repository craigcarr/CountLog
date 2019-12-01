import React, { useState, useEffect, useContext } from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import styles from './SettingsContent.module.scss';
import { SettingsContext } from '../../../App';
import TooltipButton from '../../../Components/TooltipButton/TooltipButton';
import { ISettings } from '../../../CounterDatabase';

export default function SettingsContent() {
  const [isVibrationEnabled, setVibrationEnabled] = useState<boolean>(false);
  const [isClickSoundEnabled, setClickSoundEnabled] = useState<boolean>(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);

  const settingsApi = useContext(SettingsContext);

  useEffect(() => {
    function array2dict(array: ISettings[]): any {
      return array.reduce(
        (map: any, setting: ISettings) => {
          map[setting.name] = setting.value;
          return map;
        },
        {});
    }

    settingsApi.getAllSettings().then((settings) => {
      let result = array2dict(settings);

      setVibrationEnabled(result['isVibrationEnabled']);
      setClickSoundEnabled(result['isClickSoundEnabled']);
      setDarkModeEnabled(result['isDarkModeEnabled']);
    });
  }, [settingsApi]);

  function vibrationSettingChanged() {
    let newValue = !isVibrationEnabled;

    setVibrationEnabled(newValue);

    settingsApi.putSetting({
      name: 'isVibrationEnabled',
      value: newValue,
    });

    if (newValue === true) {
      window.navigator.vibrate(200);
    }
  }

  function clickSoundSettingChanged() {
    let newValue = !isClickSoundEnabled;

    setClickSoundEnabled(newValue);

    settingsApi.putSetting({
      name: 'isClickSoundEnabled',
      value: newValue,
    });

    if (newValue === true) {
      new Audio("/click.mp3").play();
    }
  }

  function darkModeEnabledSettingChanged() {
    // TODO Theme will change on settings screen
    setDarkModeEnabled(!isDarkModeEnabled);
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={3}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Dark Mode</p>
            </Table.Cell>
            <Table.Cell>
              <TooltipButton text="Change color scheme so the app is optimized for low-light viewing." />
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
              <TooltipButton text="Play a clicking sound when a counter is incremented or decremented." />
            </Table.Cell>
            <Table.Cell>
              <Checkbox
                className={styles.checkBox}
                toggle
                checked={isClickSoundEnabled}
                onChange={clickSoundSettingChanged}>
              </Checkbox>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Vibration</p>
            </Table.Cell>
            <Table.Cell>
              <TooltipButton text="Vibrate the device when a counter is incremented or decremented." />
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
        </Table.Body>
      </Table>
    </div>
  )
}
