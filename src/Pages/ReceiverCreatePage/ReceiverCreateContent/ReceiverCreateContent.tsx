import React, { useState, useEffect, useContext } from "react";
import { Table, Select, Input, Button } from "semantic-ui-react";
import styles from "./ReceiverCreateContent.module.scss";
import { ReceiversContext } from "../../../App";
import { useHistory } from "react-router";

interface IProps {
  id: number | undefined;
}

export default function ReceiverCreateContent(props: IProps) {
  const [selectedReceiverType, setSelectedReceiverType] = useState<string>('http');
  const [serverAddress, setServerAddress] = useState<string>('');

  const history = useHistory();

  const receiversApi = useContext(ReceiversContext);

  useEffect(() => {
    if (props.id !== undefined) {
      console.log(props.id)

      receiversApi.getReceiverById(props.id).then(receiver => {
        setSelectedReceiverType(receiver.options['type']);
        setServerAddress(receiver.options['url']);
      });
    }
  }, [props.id, receiversApi]);

  const receiverTypes = [
    { key: 'http', value: 'http', text: 'HTTP' },
  ]

  function handleSelectedReceiverChange(data: any) {
    setSelectedReceiverType(data.value);
  }

  function handleServerAddressChanged(data: any) {
    setServerAddress(data.value);
  }

  function handleSaveButtonClicked() {
    if (props.id === undefined) {
      receiversApi.putReceiver({
        options: {
          type: 'http',
          url: serverAddress
        }
      });
    } else {
      receiversApi.putReceiver({
        id: props.id,
        options: {
          type: 'http',
          url: serverAddress
        }
      });
    }

    history.goBack();
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

      <div>
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
            <Button id={styles.saveButton} onClick={handleSaveButtonClicked}>
              Save
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
      </div>
    </div>
  );
}
