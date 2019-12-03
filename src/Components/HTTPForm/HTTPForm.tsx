import React, { useState } from "react";
import styles from "./HTTPForm.module.scss";
import { Table, Input, Button } from "semantic-ui-react";

export default function HTTPForm() {
  const [serverAddress, setServerAddress] = useState<string>('');

  function handleServerAddressChanged(data: any) {
    setServerAddress(data.value);
  }

  return (
    <Table unstackable columns={2}>
      <Table.Body>
        <Table.Row>
          <Table.Cell className={styles.tableCell}>
            Server Address
        </Table.Cell>
          <Table.Cell className={styles.tableCell}>
            <Input
              id={styles.serverAddressInput}
              defaultValue={serverAddress}
              onChange={(e, data) => { handleServerAddressChanged(data) }}>
            </Input>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Button disabled id={styles.verifyButton}>
              Verify
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button disabled id={styles.saveButton}>
              Save
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
