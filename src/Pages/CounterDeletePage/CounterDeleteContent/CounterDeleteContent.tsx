import React, { useContext } from 'react';
import { Table, Button } from 'semantic-ui-react';
import styles from './CounterDeleteContent.module.scss';
import { useHistory, useParams } from 'react-router';
import { CountersContext } from '../../../App';

interface IParams {
  counterId: string;
}

export default function CounterDeleteContent() {
  const history = useHistory();
  const params = useParams<IParams>();

  const countersApi = useContext(CountersContext);

  function handleDeleteButtonClicked() {
    const counterId = parseInt(params.counterId, 10);

    countersApi.deleteCounter(counterId).then(() => {
      history.push('/');
    });
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={1}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <p>Are you sure you want to delete this counter? All data associated with this counter will be lost.</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button id={styles.deleteButton} onClick={handleDeleteButtonClicked}>
                Confirm Delete
                </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
