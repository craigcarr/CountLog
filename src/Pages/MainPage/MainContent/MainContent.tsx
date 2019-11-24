import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Icon, Button, Table } from 'semantic-ui-react';
import _ from 'lodash';
import SettingsAPI from '../../../Interfaces/SettingsAPI';
import CountersAPI from '../../../Interfaces/CountersAPI';
import styles from './MainContent.module.scss';

interface IProps extends RouteComponentProps<any> { }

interface IState {
  tableData: any[],
}

class MainContent extends Component<IProps, IState> {
  state = {
    tableData: []
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

  onCounterButtonClicked = (id: number) => () => {
    this.props.history.push('/statistics/' + id)
  }

  onCreateButtonClicked = () => {
    this.props.history.push('/create')
  }

  render() {
    let tableContent = null;

    if (this.state.tableData.length === 0) {
      tableContent = <Table.Row><Table.Cell>There are no counters to display.</Table.Cell></Table.Row>
    } else {
      tableContent = _.map(this.state.tableData, ({ id, name, color, value }) => (
        <Table.Row key={id}>
          <Table.Cell className={styles.tableCell}>
            <Button
              onClick={e => { this.handleDecrement(id) }}
              className={styles.counterDecrement}
              style={{ backgroundColor: color, color: 'white' }}
              icon
              circular><Icon name="minus"></Icon>
            </Button>
            <Button
              onClick={this.onCounterButtonClicked(id)}
              className={styles.counterDisplay}
              style={{ backgroundColor: color, color: 'white' }}>
              <p className={styles.counterText}>{name}</p>
              <p className={styles.counterText}>{value}</p>
            </Button>
            <Button
              onClick={e => { this.handleIncrement(id) }}
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

        <Button circular icon id={styles.createCounterBtn} onClick={this.onCreateButtonClicked}>
          <Icon name="plus">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(MainContent);
