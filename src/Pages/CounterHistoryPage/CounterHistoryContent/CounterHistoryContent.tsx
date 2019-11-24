import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Table, Dropdown, Icon, Button } from 'semantic-ui-react';
import _ from 'lodash';
import CountersAPI from '../../../Interfaces/CountersAPI';
import { EventType } from '../../../CounterDatabase';
import LoggingAPI from '../../../Interfaces/LoggingAPI';
import styles from './CounterHistoryContent.module.scss';

interface IProps extends RouteComponentProps<any> {}

interface IState {
  tableData: any[],
  filter: EventType | undefined,
}

class MainContent extends Component<IProps, IState> {
  state = {
    tableData: [],
    filter: undefined,
  }

  componentDidMount() {
    let counterId = parseInt(this.props.match.params['counterId'], 10)

    CountersAPI.getEventsForCounter(counterId, undefined).then(events => {
      let list = [];

      for (let event of events) {
        list.push({
          id: event.id,
          type: event.type,
          timestamp: event.timestamp,
        });
      }

      list.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)

      this.setState({ tableData: list })
    })
  }

  displayTimestamp(timestamp: string): string {
    let date = new Date(parseInt(timestamp, 10));
    return date.toLocaleString();
  }

  getDisplayNameForType(type: EventType): string {
    if (type === EventType.Increment) {
      return 'Increment Event';
    } else if (type === EventType.Decrement) {
      return 'Decrement Event';
    } else if (type === EventType.Mutate) {
      return 'Mutation Event';
    } else {
      LoggingAPI.error('type has an unknown EventType')
      return 'Unknown Event Type';
    }
  }

  handleFilterChanged(data: any) {
    if (data.value === EventType.Increment) {
      this.setState({ filter: EventType.Increment })
    } else if (data.value === EventType.Decrement) {
      this.setState({ filter: EventType.Decrement })
    } else if (data.value === EventType.Mutate) {
      this.setState({ filter: EventType.Mutate })
    } else {
      this.setState({ filter: undefined })
    }
  }

  editEventClicked = (eventId: number) => () => {
    let counterId = parseInt(this.props.match.params['counterId'], 10)
    this.props.history.push('/counterhistory/' + counterId + '/editevent/' + eventId)
  }

  render() {
    let tableContent = null;

    if (this.state.tableData.length === 0) {
      tableContent = <Table.Row><Table.Cell>There are no events to display.</Table.Cell></Table.Row>
    } else {
      tableContent = _.map(this.state.tableData, ({ id, type, timestamp }) => {
        if (this.state.filter === undefined || type === this.state.filter) {
          return (
            <Table.Row key={id}>
              <Table.Cell className={styles.eventTableCell}>
                <p>{this.getDisplayNameForType(type)}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{this.displayTimestamp(timestamp)}</p>
              </Table.Cell>
              <Table.Cell>
                <Button id={styles.myButton} onClick={this.editEventClicked(id)} circular icon>
                  <Icon name="edit">
                  </Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
          )
        }
      });
    }

    const options = [
      { key: 1, text: 'Increment Events Only', value: EventType.Increment },
      { key: 2, text: 'Decrement Events Only', value: EventType.Decrement },
      { key: 3, text: 'Mutate Events Only', value: EventType.Mutate },
    ]

    return (
      <div id={styles.mainContent} className={styles.content}>
        <br></br>

        <Dropdown
          id={styles.dropdown}
          onChange={(e, data) => { this.handleFilterChanged(data); }}
          placeholder='Filter'
          options={options}
          clearable
          selection>
        </Dropdown>

        <Table striped unstackable>
          <Table.Body>
            {tableContent}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default withRouter(MainContent);
