import React from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import styles from "./ReceiverListContent.module.scss";
import { useHistory } from "react-router";

export default function ReceiverListContent() {
  const history = useHistory();

  function handleCreateButtonClicked() {
    history.push('/receivercreate'); // TODO
  }

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

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Button circular icon id={styles.createCounterBtn} onClick={handleCreateButtonClicked}>
        <Icon name="plus">
        </Icon>
      </Button>
    </div>
  );
}
