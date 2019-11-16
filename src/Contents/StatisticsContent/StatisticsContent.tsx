import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import CountersAPI from '../../Interfaces/CountersAPI';
import { withRouter } from 'react-router-dom';
import './StatisticsContent.css';

type Props = {
  counterId: number,
}

type State = {
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
        this.state.counterName = counter.name;
        this.state.counterValue = counter.value;
      }
    });
  }

  deleteButtonClicked() {
    // @ts-ignore
    this.props.history.push('/deletecounter/' + this.props.counterId, {counterId: this.props.counterId})
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
                  onClick={() => { this.deleteButtonClicked() }}>Delete</Button>
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
