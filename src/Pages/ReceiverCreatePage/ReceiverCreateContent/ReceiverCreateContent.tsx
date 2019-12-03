import React, { useState } from "react";
import { Table, Select } from "semantic-ui-react";
import styles from "./ReceiverCreateContent.module.scss";
import MQTTForm from "../../../Components/MQTTForm/MQTTForm";
import HTTPForm from "../../../Components/HTTPForm/HTTPForm";

export default function ReceiverCreateContent() {
  const [selectedReceiverType, setSelectedReceiverType] = useState<string>('http');

  const receiverTypes = [
    { key: 'http', value: 'http', text: 'HTTP' },
    { key: 'mqtt', value: 'mqtt', text: 'MQTT' },
  ]

  function handleSelectedReceiverChange(data: any) {
    setSelectedReceiverType(data.value)
  }

  let receiverConfigurationForm = null;
  if (selectedReceiverType === 'http') {
    receiverConfigurationForm = <HTTPForm></HTTPForm>;
  } else if (selectedReceiverType === 'mqtt') {
    receiverConfigurationForm = <MQTTForm></MQTTForm>;
  }

  return (
    <div className={styles.content}>
      <Table id={styles.receiverSelectorTable} unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              Receiver Type
            </Table.Cell>
            <Table.Cell className={styles.tableCell}>
              <Select
                value={selectedReceiverType}
                onChange={(e, data) => { handleSelectedReceiverChange(data) }}
                options={receiverTypes} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {receiverConfigurationForm}
    </div>
  );
}
