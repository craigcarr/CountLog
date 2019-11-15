import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import CountersAPI from '../../Interfaces/CountersAPI';
import { withRouter } from 'react-router-dom';
import './StatisticsContent.css';

type Props = {
  counterId: number,
}

type State = {
  deleteButtonText: string,
  deleteButtonColor: string,
  counterId: number,
  counterName: string,
  counterValue: number,
}

class StatisticsContent extends Component<Props, State> {
  state = {
    deleteButtonText: 'Delete',
    deleteButtonColor: '',
    counterId: -1,
    counterValue: 0,
    counterName: '',
  }

  componentWillMount() {
    // @ts-ignore
    let counterId = parseInt(this.props.counterId);

    this.setState({ counterId: counterId }, () => {
      CountersAPI.getCounterById(this.state.counterId).then(counter => {
        if (counter === undefined) {
          // TODO Do something
        } else {

          this.setState({
            counterName: counter.name,
            counterValue: counter.value,
          })
        }
      })
    });
  }

  deleteButtonClicked() {
    if (this.state.deleteButtonText === 'Delete') {
      this.setState({
        deleteButtonText: 'Press Again to Confirm Delete',
        deleteButtonColor: '#ff7777'
      });
    } else if (this.state.deleteButtonText === 'Press Again to Confirm Delete') {
      CountersAPI.deleteCounter(this.state.counterId).then(() => {
        // @ts-ignore
        this.props.history.push('/')
      });
    }
  }

  render() {
    return (
      <div className="content">
        <Table unstackable columns={2}>
          <Table.Body>
          <Table.Row>
              <Table.Cell>Counter Name</Table.Cell>
              <Table.Cell>
                {this.state.counterName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Current Value</Table.Cell>
              <Table.Cell>
                {this.state.counterValue}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Edit Counter</Table.Cell>
              <Table.Cell>
                <Button className='myButton'>Edit</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Delete Counter
              </Table.Cell>
              <Table.Cell>
                <Button
                  className='myButton'
                  style={{backgroundColor: this.state.deleteButtonColor }}
                  onClick={() => { this.deleteButtonClicked() }}>{this.state.deleteButtonText}</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>View History</Table.Cell>
              <Table.Cell><Button className='myButton'>View</Button></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

// @ts-ignore
export default withRouter(StatisticsContent);
