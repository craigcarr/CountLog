import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Icon, Button, Table } from 'semantic-ui-react';
import _ from 'lodash';
import CounterDatabase from '../../CounterDatabase';
import './MainContent.css';

type Props = {
  db: CounterDatabase,
}

type State = {
  tableData: any,
}

class MainContent extends Component<Props, State> {
  state = {
    tableData: {}
  }

  componentDidMount() {
    this.props.db.getAllCounters().then(counters => {
      this.setState({ tableData: counters })
    });
  }

  handleIncrement(id: number) {
    let callback = () => {
      this.props.db.getAllCounters().then(counters => {
        this.setState({ tableData: counters })
      });
    }

    this.props.db.incrementCounter(id, callback)
  }

  handleDecrement(id: number) {
    let callback = () => {
      this.props.db.getAllCounters().then(counters => {
        this.setState({ tableData: counters })
      });
    }

    this.props.db.decrementCounter(id, callback);
  }

  render() {
    return (
      <div id="mainContent" className="content">
        <Table unstackable>
          <Table.Body>
            {/*
  // @ts-ignore */}
            {_.map(this.state.tableData, ({ id, name, color, value }) => (
              <Table.Row key={id}>
                <Table.Cell className="tableCell">
                  <Button
                    onClick={e => { this.handleDecrement(id) }}
                    className="counterDecrement"
                    style={{ backgroundColor: color, color: 'white' }}
                    icon
                    circular><Icon name="minus"></Icon>
                  </Button>
                  <Link to={"statistics/" + id}>
                    <Button
                      className="counterDisplay"
                      style={{ backgroundColor: color, color: 'white' }}>
                      <p className="counterText">{name}</p>
                      <p className="counterText">{value}</p>
                    </Button>
                  </Link>
                  <Button
                    onClick={e => { this.handleIncrement(id) }}
                    className="counterIncrement"
                    style={{ backgroundColor: color, color: 'white' }}
                    icon
                    circular><Icon name="plus"></Icon>
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Link to="/create">
          <Button circular icon id="createCounterBtn">
            <Icon name="plus">
            </Icon>
          </Button>
        </Link>
      </div>
    )
  }
}

export default MainContent;
