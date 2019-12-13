import React from 'react';
import styles from './AboutContent.module.scss';
import { Table, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function AboutContent() {
  const history = useHistory();

  function handleDebugLogButtonClicked() {
    history.push('/debug');
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={1}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <h2 className={styles.myHeader}>What is CountLog?</h2>

              <p>
                CountLog is an open source app designed to help you manually record, visualize,
                and analyze events to improve workflows in everyday life.
              </p>

              <a
                href="https://countlog.xyz/"
                target="_blank"
                rel="noopener noreferrer">
                <Button className={styles.myButton}>
                  Read Docs
                </Button>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <h2 className={styles.myHeader}>Have an issue?</h2>

              <p>
                If you have encountered any bugs or issues while using the app, or want to request
                a new feature, feel free to file an issue at GitHub.
              </p>

              <a
                href="https://github.com/craigcarr/CountLog/issues"
                target="_blank"
                rel="noopener noreferrer">
                <Button className={styles.myButton}>
                  File Issue
                </Button>
              </a>

              <Button className={styles.myButton} onClick={handleDebugLogButtonClicked}>
                Debug Log
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <h2 className={styles.myHeader}>Copyright Information</h2>

              <p>
                Copyright © Craig Carr 2019
              </p>

              <a
                href="https://github.com/craigcarr/CountLog/blob/master/LICENSE.txt"
                target="_blank"
                rel="noopener noreferrer">
                <Button className={styles.myButton}>
                  View License
                </Button>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
