import React from "react";
import { Table } from "semantic-ui-react";
import styles from "./ReceiverDeleteContent.module.scss";

export default function ReceiverDeleteContent() {
  return (
    <div className={styles.content}>
      <Table unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              TODO
            </Table.Cell>
            <Table.Cell className={styles.tableCell}>
              TODO
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
