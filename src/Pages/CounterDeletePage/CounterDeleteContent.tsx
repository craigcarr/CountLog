import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router';
import CountersAPI from '../../Interfaces/CountersAPI';
import styles from './CounterDeleteContent.module.scss';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class CounterDeleteContent extends Component<IProps, IState> {
  deleteButtonClicked() {
    let counterId = parseInt(this.props.match.params['counterId'], 10)

    CountersAPI.deleteCounter(counterId).then(() => {
      this.props.history.push('/')
    });
  }

  render() {
    return (
      <div className={styles.content}>
        <Table unstackable columns={1}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                Are you sure you want to delete this counter? All data associated with this counter will be lost.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Button id={styles.deleteButton} onClick={() => { this.deleteButtonClicked() }}>
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
