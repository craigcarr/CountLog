import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Table, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';
import CountersAPI from '../../Interfaces/CountersAPI';
import './CounterHistoryContent.css';
import { EventType } from '../../CounterDatabase';

type Props = {}

type State = {
  tableData: any,
  filter: EventType | undefined,
}

class MainContent extends Component<Props, State> {
  state = {
    tableData: {},
    filter: undefined,
  }

  componentDidMount() {
    // @ts-ignore
    let counterId = parseInt(this.props.match.params['counterId'])

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

  foo(timestamp: string): string {
    let date = new Date(parseInt(timestamp));
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
      // TODO Do something
      return 'Unknown Event Type';
    }
  }

  handleFilterChanged(data: any) {
    if (data.value === EventType.Increment) {
      this.setState({ filter: EventType.Increment })
    } else if (data.value === EventType.Decrement) {
      this.setState({ filter: EventType.Decrement })
    } else {
      this.setState({ filter: undefined })
    }
  }

  render() {
    let tableContent = null;

    // @ts-ignore
    if (this.state.tableData.length === 0) {
      tableContent = <Table.Row><Table.Cell>There are no events to display.</Table.Cell></Table.Row>
    } else {
      tableContent = _.map(this.state.tableData, ({ id, type, timestamp }) => {
        if (this.state.filter === undefined || type === this.state.filter) {
          return (
            <Table.Row key={id}>
              <Table.Cell className="eventTableCell">
                <Button className="eventDisplay">
                  <p className="eventText">{this.getDisplayNameForType(type)}</p>
                  <p className="eventText">{this.foo(timestamp)}</p>
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
    ]

    return (
      <div id="mainContent" className="content">
        <Table unstackable>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Dropdown
                  style={{width: 100 + '%'}}
                  onChange={(e, data) => { this.handleFilterChanged(data); }}
                  placeholder='Filter'
                  options={options}
                  clearable
                  selection>
                </Dropdown>
              </Table.Cell>
            </Table.Row>

            {/* Separator row for spacing. */}
            <Table.Row>
              <Table.Cell></Table.Cell>
            </Table.Row>

            {tableContent}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

// @ts-ignore
export default withRouter(MainContent);
