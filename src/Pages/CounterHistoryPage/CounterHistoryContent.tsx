import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Table } from 'semantic-ui-react';
import _ from 'lodash';
import CountersAPI from '../../Interfaces/CountersAPI';
import './CounterHistoryContent.css';

type Props = {}

type State = {
  tableData: any,
}

class MainContent extends Component<Props, State> {
  state = {
    tableData: {}
  }

  componentDidMount() {
    // @ts-ignore
    let counterId = parseInt(this.props.match.params['counterId'])

    CountersAPI.getIncrementEventsForCounter(counterId).then(incrementEvents => {
      CountersAPI.getDecrementEventsForCounter(counterId).then(decrementEvents => {

        let list = [];

        for (let event of incrementEvents) {
          list.push({
            id: event.id,
            type: 'Increment Event',
            timestamp: event.timestamp,
          })
        }

        for (let event of decrementEvents) {
          list.push({
            id: event.id,
            type: 'Decrement Event',
            timestamp: event.timestamp,
          })
        }

        list.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)

        this.setState({ tableData: list })
      });
    });
  }

  foo(timestamp: string): string {
    let date = new Date(parseInt(timestamp));
    return date.toLocaleString();
  }

  render() {
    let tableContent = null;

    // @ts-ignore
    if (this.state.tableData.length === 0) {
      tableContent = <Table.Row><Table.Cell>There are no counters to display.</Table.Cell></Table.Row>
    } else {
      tableContent = _.map(this.state.tableData, ({ id, type, timestamp }) => (
        <Table.Row key={id}>
          <Table.Cell className="eventTableCell">
            <Button className="eventDisplay">
              <p className="eventText">{type}</p>
              <p className="eventText">{this.foo(timestamp)}</p>
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
      </div>
    )
  }
}

// @ts-ignore
export default withRouter(MainContent);
