import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Icon, Button, Table } from 'semantic-ui-react';
import styles from './MainContent.module.scss';
import { CountersContext, SettingsContext } from '../../../App';
import { SettingName } from '../../../CounterDatabase';

export default function MainContent() {
  const [tableData, setTableData] = useState<any[]>([]);

  const history = useHistory();

  const countersApi = useContext(CountersContext);
  const settingsApi = useContext(SettingsContext);

  useEffect(() => {
    countersApi.getAllCounters().then(counters => {
      setTableData(counters);
    });
  }, [countersApi]);

  function handleIncrement(id: number) {
    handleChange(id, true);
  }

  function handleDecrement(id: number) {
    handleChange(id, false);
  }

  function handleChange(id: number, isIncrement: boolean) {
    settingsApi.getSettingByName(SettingName.isVibrationEnabled).then(setting => {
      if (setting.value === true) {
        window.navigator.vibrate(200);
      }
    });

    settingsApi.getSettingByName(SettingName.isClickSoundEnabled).then(setting => {
      if (setting.value === true) {
        new Audio("/click.mp3").play();
      }
    });

    let callback = () => {
      countersApi.getAllCounters().then(counters => {
        setTableData(counters);
      });
    }

    if (isIncrement) {
      countersApi.incrementCounter(id, callback)
    } else {
      countersApi.decrementCounter(id, callback);
    }
  }

  function handleCounterButtonClicked(id: number) {
    history.push('/statistics/' + id)
  }

  function handleCreateButtonClicked() {
    history.push('/create')
  }

  let tableContent = null;

  if (tableData.length === 0) {
    tableContent = <Table.Row><Table.Cell><p>There are no counters to display.</p></Table.Cell></Table.Row>
  } else {
    tableContent = tableData.map(({ id, name, color, value }) => (
      <Table.Row key={id}>
        <Table.Cell className={styles.tableCell}>
          <Button
            onClick={e => { handleDecrement(id) }}
            className={styles.counterDecrement}
            style={{ backgroundColor: color, color: 'white' }}
            icon
            circular><Icon name="minus"></Icon>
          </Button>
          <Button
            onClick={() => { handleCounterButtonClicked(id) }}
            className={styles.counterDisplay}
            style={{ backgroundColor: color, color: 'white' }}>
            <h4 className={styles.counterText}>{name}</h4>
            <h4 className={styles.counterText}>{value}</h4>
          </Button>
          <Button
            onClick={e => { handleIncrement(id) }}
            className={styles.counterIncrement}
            style={{ backgroundColor: color, color: 'white' }}
            icon
            circular><Icon name="plus"></Icon>
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  }

  return (
    <div className={styles.content}>
      <Table unstackable>
        <Table.Body>
          {tableContent}
        </Table.Body>
      </Table>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Button circular icon id={styles.createCounterBtn} onClick={handleCreateButtonClicked}>
        <Icon name="plus">
        </Icon>
      </Button>
    </div>
  );
}