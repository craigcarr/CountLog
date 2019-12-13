import React, { useState, useEffect, useContext } from 'react';
import styles from './DebugContent.module.scss';
import { Table } from 'semantic-ui-react';
import { LoggingContext } from '../../../App';
import { ILogMessage } from '../../../Interfaces/LoggingAPI';

export default function DebugContent() {
  const [tableData, setTableData] = useState<any[]>([]);

  const loggingApi = useContext(LoggingContext);

  let tableContent = null;

  useEffect(() => {
    setTableData(loggingApi.getLogMessages());
  }, [loggingApi]);

  if (tableData.length === 0) {
    tableContent = <Table.Row><Table.Cell><p>There are no messages to display.</p></Table.Cell></Table.Row>
  } else {
    tableContent = tableData.map((message: ILogMessage) => (
      <Table.Row key={message.id}>
        <Table.Cell>
          <p><span role="img" aria-label="red x">❌</span> [{message.timestamp}] {message.message}</p>
        </Table.Cell>
      </Table.Row>
    ));
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={1}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <p>
                Note: The debug log only shows messages since the app has been opened.
                The messages are not persisted across restarts of the app.
              </p>
            </Table.Cell>
          </Table.Row>

          {tableContent}
        </Table.Body>
      </Table>
    </div>
  );
}
