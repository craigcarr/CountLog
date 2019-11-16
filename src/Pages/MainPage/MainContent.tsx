import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Icon, Button, Table } from 'semantic-ui-react';
import _ from 'lodash';
import SettingsAPI from '../../Interfaces/SettingsAPI';
import CountersAPI from '../../Interfaces/CountersAPI';
import './MainContent.css';

type Props = {}

type State = {
  tableData: any,
}

class MainContent extends Component<Props, State> {
  state = {
    tableData: {}
  }

  componentDidMount() {
    CountersAPI.getAllCounters().then(counters => {
      this.setState({ tableData: counters })
    });
  }

  handleIncrement(id: number) {
    SettingsAPI.getSettingValue('isVibrationEnabled').then(setting => {
      if (setting !== undefined && setting.value === true) {
        window.navigator.vibrate(200);
      }
    });

    let callback = () => {
      CountersAPI.getAllCounters().then(counters => {
        this.setState({ tableData: counters })
      });
    }

    CountersAPI.incrementCounter(id, callback)
  }

  handleDecrement(id: number) {
    SettingsAPI.getSettingValue('isVibrationEnabled').then(setting => {
      if (setting !== undefined && setting.value === true) {
        window.navigator.vibrate(200);
      }
    });

    let callback = () => {
      CountersAPI.getAllCounters().then(counters => {
        this.setState({ tableData: counters })
      });
    }

    CountersAPI.decrementCounter(id, callback);
  }

  render() {
    let tableContent = null;

    // @ts-ignore
    if (this.state.tableData.length === 0) {
      tableContent = <Table.Row><Table.Cell>There are no counters to display.</Table.Cell></Table.Row>
    } else {
      tableContent = _.map(this.state.tableData, ({ id, name, color, value }) => (
        <Table.Row key={id}>
          <Table.Cell className="tableCell">
            <Button
              onClick={e => { this.handleDecrement(id) }}
              className="counterDecrement"
              style={{ backgroundColor: color, color: 'white' }}
              icon
              circular><Icon name="minus"></Icon>
            </Button>
            <Link to={"statistics/" + id}>
              <Button
                className="counterDisplay"
                style={{ backgroundColor: color, color: 'white' }}>
                <p className="counterText">{name}</p>
                <p className="counterText">{value}</p>
              </Button>
            </Link>
            <Button
              onClick={e => { this.handleIncrement(id) }}
              className="counterIncrement"
              style={{ backgroundColor: color, color: 'white' }}
              icon
              circular><Icon name="plus"></Icon>
            </Button>
          </Table.Cell>
        </Table.Row>
      ))
    }

    return (
      <div id="mainContent" className="content">
        <Table unstackable>
          <Table.Body>
            {tableContent}
          </Table.Body>
        </Table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Link to="/create">
          <Button circular icon id="createCounterBtn">
            <Icon name="plus">
            </Icon>
          </Button>
        </Link>
      </div>
    )
  }
}

export default MainContent;
