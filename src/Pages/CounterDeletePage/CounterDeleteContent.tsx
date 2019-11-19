import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router';
import CountersAPI from '../../Interfaces/CountersAPI';
import './CounterDeleteContent.css';

interface Props extends RouteComponentProps<any> {}

interface State {}

class CounterDeleteContent extends Component<Props, State> {
  deleteButtonClicked() {
    let counterId = parseInt(this.props.match.params['counterId'])

    CountersAPI.deleteCounter(counterId).then(() => {
      this.props.history.push('/')
    });
  }

  render() {
    return (
      <div className="content">
        <Table unstackable columns={1}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                Are you sure you want to delete this counter? All data associated with this counter will be lost.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Button id="deleteButton" onClick={() => { this.deleteButtonClicked() }}>
                  Confirm Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default withRouter(CounterDeleteContent);
