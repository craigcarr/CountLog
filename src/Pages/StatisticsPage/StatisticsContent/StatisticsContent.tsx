import React, { useState, useEffect, useContext } from 'react';
import { Table, Button } from 'semantic-ui-react';
import styles from './StatisticsContent.module.scss';
import { useHistory, useParams } from 'react-router';
import { CountersContext } from '../../../App';
import { Line } from 'react-chartjs-2';
import { Colors } from '../../../Components/ColorPicker/ColorPicker';
import 'chartjs-plugin-zoom';

interface IParams {
  counterId: string;
}

export default function StatisticsContent() {
  let initialData = {
    labels: [],
    datasets: [
      {
        label: 'Display Value over Time',
        data: [],
      }
    ]
  };

  const [counterName, setCounterName] = useState<string>('');
  const [counterColor, setCounterColor] = useState<string>('');
  const [counterValue, setCounterValue] = useState<number>(0);
  const [chartData, setChartData] = useState<any>(initialData);

  const history = useHistory();
  const params = useParams<IParams>();

  const countersApi = useContext(CountersContext);

  useEffect(() => {
    const counterId = parseInt(params.counterId, 10);

    countersApi.getCounterById(counterId).then(counter => {
      setCounterName(counter.name);
      setCounterColor(counter.color);
      setCounterValue(counter.value);
    });

    countersApi.getDisplayValuesForCounter(counterId).then(displayValues => {
      let list = [];

      for (let displayValue of displayValues) {
        list.push({
          timestamp: displayValue.timestamp,
          value: displayValue.value,
        });
      }

      list.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);

      let labels = []
      let data = []

      for (let displayValue of list) {
        labels.push(
          new Date(parseInt(displayValue.timestamp, 10))
        );

        data.push(displayValue.value);
      }

      let newChartData = {
        labels: labels,
        datasets: [
          {
            label: 'Value',
            fill: false,
            borderColor: counterColor,
            backgroundColor: 'white',
            pointBorderColor: 'black',
            pointHoverBorderColor: 'black',
            pointHoverColor: 'white',
            pointHoverBackgroundColor: 'white',
            lineTension: 0.0,
            pointRadius: 5,
            pointHitRadius: 15,
            data: data,
          }
        ]
      };

      setChartData(newChartData);
    });
  }, [params, countersApi, counterColor]);

  function handleEditButtonClicked() {
    const counterId = parseInt(params.counterId, 10);
    history.push('/editcounter/' + counterId);
  }

  function handleDeleteButtonClicked() {
    const counterId = parseInt(params.counterId, 10);
    history.push('/deletecounter/' + counterId);
  }

  function handleViewButtonClicked() {
    const counterId = parseInt(params.counterId, 10);
    history.push('/counterhistory/' + counterId);
  }

  function displayCounterColor(color: string) {
    if (color === Colors.red) {
      return 'Red';
    } else if (color === Colors.orange) {
      return 'Orange';
    } else if (color === Colors.yellow) {
      return 'Yellow';
    } else if (color === Colors.green) {
      return 'Green';
    } else if (color === Colors.blue) {
      return 'Blue';
    } else if (color === Colors.purple) {
      return 'Purple';
    } else if (color === Colors.black) {
      return 'Black';
    } else {
      return '';
    }
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
              {/* Use "h4" so that the dark theme will not override the color. */}
              <h4 style={{ color: counterColor }}>{displayCounterColor(counterColor)}</h4>
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
                onClick={handleEditButtonClicked}>
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
                onClick={handleDeleteButtonClicked}>
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
                onClick={handleViewButtonClicked}>
                View
                </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <br></br>

      <div className={styles.chartDiv}>
        <Line
          data={chartData}
          width={100}
          height={100}
          options={{
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'xy'
                },
                zoom: {
                  enabled: true,
                  mode: 'xy',
                }
              }
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                },
                type: 'time',
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  sampleSize: 1,
                },
              }],
              yAxes: [{
                gridLines: {
                  display: true,
                },
              }]
            }
          }}
        />
      </div>
    </div>
  );
}
