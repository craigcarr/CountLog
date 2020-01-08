import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Table, Button } from 'semantic-ui-react';
import styles from './StatisticsContent.module.scss';
import { useHistory, useParams } from 'react-router';
import { CountersContext } from '../../../App';
import { Colors } from '../../../Components/ColorPicker/ColorPicker';
const StatisticsChart = React.lazy(() => import('./StatisticsChart/StatisticsChart'));

interface IParams {
  counterId: string;
}

export default function StatisticsContent() {
  const [counterName, setCounterName] = useState<string>('');
  const [counterColor, setCounterColor] = useState<string>('');
  const [counterValue, setCounterValue] = useState<number>(0);

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

      <Suspense fallback={<div><p>Loading...</p></div>}>
        <StatisticsChart
          counterColor={counterColor}
          counterId={parseInt(params.counterId, 10)} />
      </Suspense>
    </div>
  );
}
