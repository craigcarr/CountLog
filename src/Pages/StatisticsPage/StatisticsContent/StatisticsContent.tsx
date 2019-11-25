import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import CountersAPI from '../../../Interfaces/CountersAPI';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './StatisticsContent.module.scss';
import LoggingAPI from '../../../Interfaces/LoggingAPI';
import { VictoryChart, VictoryLine, VictoryLabel, VictoryAxis } from "victory";

interface IProps extends RouteComponentProps<any> { }

interface IState {
  counterId: number,
  counterName: string,
  counterColor: string,
  counterValue: number,
  chartData: any[],
}

class StatisticsContent extends Component<IProps, IState> {
  state = {
    counterId: -1,
    counterValue: 0,
    counterColor: '',
    counterName: '',
    chartData: [],
  }

  constructor(props: any) {
    super(props);

    // Ghetto hack to handle the specific situation where the user rotates his/her
    // screen from vertical to horizontal in order to get a better view of the chart.
    let trueVMin = 0.8 * Math.min(window.innerHeight, window.innerWidth);
    document.documentElement.style.setProperty("--trueVMin", trueVMin.toString() + 'px');

    this.state.counterId = parseInt(this.props.match.params['counterId'], 10)

    CountersAPI.getCounterById(this.state.counterId).then(counter => {
      if (counter === undefined) {
        LoggingAPI.error('counter is undefined')
      } else {
        this.setState({
          counterName: counter.name,
          counterColor: counter.color,
          counterValue: counter.value,
        })
      }
    });
  }

  componentDidMount() {
    let counterId = parseInt(this.props.match.params['counterId'], 10)

    CountersAPI.getDisplayValuesForCounter(counterId).then(displayValues => {
      let list = [];

      for (let displayValue of displayValues) {
        list.push({
          timestamp: displayValue.timestamp,
          value: displayValue.value,
        });
      }

      list.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)

      let chartData = [];

      for (let displayValue of list) {
        chartData.push(
          { x: new Date(parseInt(displayValue.timestamp, 10)), y: displayValue.value },
        );
      }

      this.setState({ chartData: chartData });
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
                <p>Current Color</p>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className={styles.colorButton}
                  style={{ backgroundColor: this.state.counterColor, color: 'white' }}>
                  {this.state.counterColor}
                </Button>
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

        <div className={styles.chartDiv}>
          {/* TODO Use `width={window.innerWidth}` to fix the chart's width. */}
          <VictoryChart scale={{ x: "time" }} padding={{left: 65, right: 15, top: 40, bottom: 40}}>
            <VictoryLabel text="Display Value versus Time" x={225} y={20} textAnchor="middle" />
            <VictoryAxis fixLabelOverlap={true}></VictoryAxis>
            <VictoryAxis dependentAxis fixLabelOverlap={true}></VictoryAxis>
            <VictoryLine

              style={{
                data: { stroke: this.state.counterColor },
              }}
              data={this.state.chartData}
            />
          </VictoryChart>
        </div>
      </div>
    )
  }
}

export default withRouter(StatisticsContent);
