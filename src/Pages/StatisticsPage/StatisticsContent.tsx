import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import CountersAPI from '../../Interfaces/CountersAPI';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './StatisticsContent.css';

interface Props extends RouteComponentProps<any> {
  counterId: number,
}

interface State {
  counterName: string,
  counterValue: number,
}

class StatisticsContent extends Component<Props, State> {
  state = {
    counterValue: 0,
    counterName: '',
  }

  constructor(props: any) {
    super(props);

    CountersAPI.getCounterById(this.props.counterId).then(counter => {
      if (counter === undefined) {
        // TODO Do something
      } else {
        this.setState({
          counterName: counter.name,
          counterValue: counter.value,
        })
      }
    });
  }

  editButtonClicked() {
    this.props.history.push('/editcounter/' + this.props.counterId)
  }

  deleteButtonClicked() {
    this.props.history.push('/deletecounter/' + this.props.counterId)
  }

  viewButtonClicked() {
    this.props.history.push('/counterhistory/' + this.props.counterId)
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
                <Button
                  className='myButton'
                  onClick={() => { this.editButtonClicked() }}>
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Delete Counter
              </Table.Cell>
              <Table.Cell>
                <Button
                  className='myButton'
                  onClick={() => { this.deleteButtonClicked() }}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>View History</Table.Cell>
              <Table.Cell>
                <Button
                  className='myButton'
                  onClick={() => { this.viewButtonClicked() }}>
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
