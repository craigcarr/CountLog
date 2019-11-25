import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import CountersAPI from '../../../Interfaces/CountersAPI';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './StatisticsContent.module.scss';
import LoggingAPI from '../../../Interfaces/LoggingAPI';

interface IProps extends RouteComponentProps<any> {}

interface IState {
  counterId: number,
  counterName: string,
  counterValue: number,
}

class StatisticsContent extends Component<IProps, IState> {
  state = {
    counterId: -1,
    counterValue: 0,
    counterName: '',
  }

  constructor(props: any) {
    super(props);

    this.state.counterId = parseInt(this.props.match.params['counterId'], 10)

    CountersAPI.getCounterById(this.state.counterId).then(counter => {
      if (counter === undefined) {
        LoggingAPI.error('counter is undefined')
      } else {
        this.setState({
          counterName: counter.name,
          counterValue: counter.value,
        })
      }
    });
  }

  editButtonClicked = () => {
    this.props.history.push('/editcounter/' + this.state.counterId)
  }

  deleteButtonClicked = () => {
    this.props.history.push('/deletecounter/' + this.state.counterId)
  }

  viewButtonClicked = () => {
    this.props.history.push('/counterhistory/' + this.state.counterId)
  }

  render() {
    return (
      <div className={styles.content}>
        <Table unstackable columns={2}>
          <Table.Body>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p>Counter Name</p>
              </Table.Cell>
              <Table.Cell>
                <p>{this.state.counterName}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p>Current Value</p>
              </Table.Cell>
              <Table.Cell>
                <p>{this.state.counterValue}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p>Edit Counter</p>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className={styles.myButton}
                  onClick={this.editButtonClicked}>
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p>Delete Counter</p>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className={styles.myButton}
                  onClick={this.deleteButtonClicked}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p>View History</p>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className={styles.myButton}
                  onClick={this.viewButtonClicked}>
                  View
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default withRouter(StatisticsContent);
