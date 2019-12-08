import React, { useState, useEffect, useContext } from 'react';
import { Table, Checkbox, Button } from 'semantic-ui-react';
import styles from './SettingsContent.module.scss';
import { SettingsContext } from '../../../App';
import TooltipButton from '../../../Components/TooltipButton/TooltipButton';
import { ISetting } from '../../../CounterDatabase';
import { useHistory } from 'react-router';

export default function SettingsContent() {
  const [isVibrationEnabled, setVibrationEnabled] = useState<boolean>(false);
  const [isClickSoundEnabled, setClickSoundEnabled] = useState<boolean>(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);

  const settingsApi = useContext(SettingsContext);

  const history = useHistory();

  useEffect(() => {
    function array2dict(array: ISetting[]): any {
      return array.reduce(
        (map: any, setting: ISetting) => {
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

  function handleVibrationSettingChanged() {
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

  function handleClickSoundSettingChanged() {
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

  function handleDarkModeEnabledSettingChanged() {
    // TODO Theme will change on settings screen
    setDarkModeEnabled(!isDarkModeEnabled);
  }

  function handleConfigureButtonClicked() {
    history.push('/receiverlist');
  }

  let isInstalledText = null;
  let isInstalledColor = null;
  if (window.matchMedia('(display-mode: standalone)').matches) {
    isInstalledText = "Installed";
    isInstalledColor = "#ddddff";
  } else {
    isInstalledText = "Not Installed";
    isInstalledColor = "#ffdddd";
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={3}>
        <Table.Body>
          <Table.Row style={{ backgroundColor: isInstalledColor }}>
            <Table.Cell>
              Installation Status
            </Table.Cell>
            <Table.Cell>
              <TooltipButton text="Add CountLog to your home screen for a more authentic app experience." />
            </Table.Cell>
            <Table.Cell>
              {isInstalledText}
            </Table.Cell>
          </Table.Row>
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
                onChange={handleDarkModeEnabledSettingChanged}>
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
                onChange={handleClickSoundSettingChanged}>
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
                onChange={handleVibrationSettingChanged}>
              </Checkbox>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Event Receivers</p>
            </Table.Cell>
            <Table.Cell>
              <TooltipButton text="Configure back-ends to receive events that have been fired by CountLog." />
            </Table.Cell>
            <Table.Cell>
              <Button className={styles.button} onClick={handleConfigureButtonClicked}>Configure</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
