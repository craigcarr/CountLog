import React, { useState, useEffect, useContext } from 'react';
import { Table, Button } from 'semantic-ui-react';
import styles from './StatisticsContent.module.scss';
import { VictoryChart, VictoryLine, VictoryLabel, VictoryAxis } from "victory";
import { useHistory, useParams } from 'react-router';
import { CountersContext, LoggingContext } from '../../../App';

export default function StatisticsContent() {
  const [counterId, setCounterId] = useState<number>(-1);
  const [counterName, setCounterName] = useState<string>('');
  const [counterColor, setCounterColor] = useState<string>('');
  const [counterValue, setCounterValue] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);

  let history = useHistory();
  let params = useParams<any>();

  const loggingApi = useContext(LoggingContext);
  const countersApi = useContext(CountersContext);

  useEffect(() => {
    // Ghetto hack to handle the specific situation where the user rotates his/her
    // screen from vertical to horizontal in order to get a better view of the chart.
    let trueVMin = 0.8 * Math.min(window.innerHeight, window.innerWidth);
    document.documentElement.style.setProperty("--trueVMin", trueVMin.toString() + 'px');

    let counterIdXXX = parseInt(params['counterId'], 10)
    setCounterId(counterIdXXX);

    countersApi.getCounterById(counterIdXXX).then(counter => {
      if (counter === undefined) {
        loggingApi.error('counter is undefined')
      } else {
        setCounterName(counter.name);
        setCounterColor(counter.color);
        setCounterValue(counter.value);
      }
    });

    countersApi.getDisplayValuesForCounter(counterIdXXX).then(displayValues => {
      let list = [];

      for (let displayValue of displayValues) {
        list.push({
          timestamp: displayValue.timestamp,
          value: displayValue.value,
        });
      }

      list.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)

      let chartDataXXX = [];

      for (let displayValue of list) {
        chartDataXXX.push(
          { x: new Date(parseInt(displayValue.timestamp, 10)), y: displayValue.value },
        );
      }

      setChartData(chartDataXXX);
    });
  }, [params, countersApi, loggingApi]);

  function editButtonClicked() {
    history.push('/editcounter/' + counterId)
  }

  function deleteButtonClicked() {
    history.push('/deletecounter/' + counterId)
  }

  function viewButtonClicked() {
    history.push('/counterhistory/' + counterId)
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Counter Name</p>
            </Table.Cell>
            <Table.Cell>
              <p>{counterName}</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Current Color</p>
            </Table.Cell>
            <Table.Cell>
              <Button
                className={styles.colorButton}
                style={{ backgroundColor: counterColor, color: 'white' }}>
                {counterColor}
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Current Value</p>
            </Table.Cell>
            <Table.Cell>
              <p>{counterValue}</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Edit Counter</p>
            </Table.Cell>
            <Table.Cell>
              <Button
                className={styles.myButton}
                onClick={editButtonClicked}>
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
                onClick={deleteButtonClicked}>
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
                onClick={viewButtonClicked}>
                View
                </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <div className={styles.chartDiv}>
        {/* TODO Use `width={window.innerWidth}` to fix the chart's width. */}
        <VictoryChart scale={{ x: "time" }} padding={{ left: 65, right: 15, top: 40, bottom: 40 }}>
          <VictoryLabel text="Display Value versus Time" x={225} y={20} textAnchor="middle" />
          <VictoryAxis fixLabelOverlap={true}></VictoryAxis>
          <VictoryAxis dependentAxis fixLabelOverlap={true}></VictoryAxis>
          <VictoryLine
            style={{
              data: { stroke: counterColor },
            }}
            data={chartData}
          />
        </VictoryChart>
      </div>
    </div>
  );
}
