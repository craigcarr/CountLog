import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Icon, Button, Table } from 'semantic-ui-react';
import _ from 'lodash';
import SettingsAPI from '../../../Interfaces/SettingsAPI';
import CountersAPI from '../../../Interfaces/CountersAPI';
import styles from './MainContent.module.scss';

export default function MainContent() {
  const [tableData, setTableData] = useState<any[]>([]);

  let history = useHistory();

  useEffect(() => {
    CountersAPI.getAllCounters().then(counters => {
      setTableData(counters);
    });
  }, []);

  function handleIncrement(id: number) {
    SettingsAPI.getSettingValue('isVibrationEnabled').then(setting => {
      if (setting !== undefined && setting.value === true) {
        window.navigator.vibrate(200);
      }
    });

    let callback = () => {
      CountersAPI.getAllCounters().then(counters => {
        setTableData(counters);
      });
    }

    CountersAPI.incrementCounter(id, callback)
  }

  function handleDecrement(id: number) {
    SettingsAPI.getSettingValue('isVibrationEnabled').then(setting => {
      if (setting !== undefined && setting.value === true) {
        window.navigator.vibrate(200);
      }
    });

    let callback = () => {
      CountersAPI.getAllCounters().then(counters => {
        setTableData(counters);
      });
    }

    CountersAPI.decrementCounter(id, callback);
  }

  function onCounterButtonClicked(id: number) {
    history.push('/statistics/' + id)
  }

  function onCreateButtonClicked() {
    history.push('/create')
  }

  let tableContent = null;

  if (tableData.length === 0) {
    tableContent = <Table.Row><Table.Cell>There are no counters to display.</Table.Cell></Table.Row>
  } else {
    tableContent = _.map(tableData, ({ id, name, color, value }) => (
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
            onClick={() => { onCounterButtonClicked(id) }}
            className={styles.counterDisplay}
            style={{ backgroundColor: color, color: 'white' }}>
            <p className={styles.counterText}>{name}</p>
            <p className={styles.counterText}>{value}</p>
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
    ))
  }

  return (
    <div id={styles.mainContent} className={styles.content}>
      <Table unstackable>
        <Table.Body>
          {tableContent}
        </Table.Body>
      </Table>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Button circular icon id={styles.createCounterBtn} onClick={onCreateButtonClicked}>
        <Icon name="plus">
        </Icon>
      </Button>
    </div>
  );
}
