import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import CountersAPI from '../../Interfaces/CountersAPI';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './StatisticsContent.module.scss';
import LoggingAPI from '../../Interfaces/LoggingAPI';

interface IProps extends RouteComponentProps<any> {
  counterId: number,
}

interface IState {
  counterName: string,
  counterValue: number,
}

class StatisticsContent extends Component<IProps, IState> {
  state = {
    counterValue: 0,
    counterName: '',
  }

  constructor(props: any) {
    super(props);

    CountersAPI.getCounterById(this.props.counterId).then(counter => {
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
    this.props.history.push('/editcounter/' + this.props.counterId)
  }

  deleteButtonClicked = () => {
    this.props.history.push('/deletecounter/' + this.props.counterId)
  }

  viewButtonClicked = () => {
    this.props.history.push('/counterhistory/' + this.props.counterId)
  }

  render() {
    return (
      <div className={styles.content}>
        <Table unstackable columns={2}>
          <Table.Body>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p className={styles.bodyText}>Counter Name</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.bodyText}>{this.state.counterName}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p className={styles.bodyText}>Current Value</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.bodyText}>{this.state.counterValue}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={styles.tableCell}>
                <p className={styles.bodyText}>Edit Counter</p>
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
                <p className={styles.bodyText}>Delete Counter</p>
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
                <p className={styles.bodyText}>View History</p>
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
