import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import CountersAPI from '../../../Interfaces/CountersAPI';
import styles from './CounterDeleteContent.module.scss';
import { useHistory, useParams } from 'react-router';

export default function CounterDeleteContent() {
  let history = useHistory();
  let params = useParams<any>();

  function deleteButtonClicked() {
    let counterId = parseInt(params['counterId'], 10)

    CountersAPI.deleteCounter(counterId).then(() => {
      history.push('/')
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
              <Button id={styles.deleteButton} onClick={deleteButtonClicked}>
                Confirm Delete
                </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
