import React, { useState, useEffect, useContext } from 'react';
import { CountersContext } from '../../../../App';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-zoom';
import styles from './StatisticsChart.module.scss';

interface IProps {
  counterId: number,
  counterColor: string,
}

export default function StatisticsChart(props: IProps) {
  console.log('HERE')

  let initialData = {
    labels: [],
    datasets: [
      {
        label: 'Display Value over Time',
        data: [],
      }
    ]
  };

  const [chartData, setChartData] = useState<any>(initialData);

  const countersApi = useContext(CountersContext);

  useEffect(() => {
    const counterId = props.counterId;

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
            borderColor: props.counterColor,
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
  }, [countersApi, props.counterId, props.counterColor]);

  return (
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
  );
}
