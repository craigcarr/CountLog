import React, { useState, useEffect, useContext } from "react";
import { Table, Select, Input, Button } from "semantic-ui-react";
import styles from "./ReceiverCreateContent.module.scss";
import { ReceiversContext } from "../../../App";
import { useHistory } from "react-router";
import { IReceiver, ReceiverType, IHttpReceiverOptions } from "../../../CounterDatabase";

interface IProps {
  id: number | undefined;
}

export default function ReceiverCreateContent(props: IProps) {
  const [selectedReceiverType, setSelectedReceiverType] = useState<string>('http');
  const [serverAddress, setServerAddress] = useState<string>('');
  const [verificationColor, setVerificationColor] = useState<string>('');

  const history = useHistory();

  const receiversApi = useContext(ReceiversContext);

  useEffect(() => {
    if (props.id !== undefined) {
      receiversApi.getReceiverById(props.id).then(receiver => {
        if (receiver.type === ReceiverType.http) {
          let options: IHttpReceiverOptions = receiver.options as IHttpReceiverOptions;

          setSelectedReceiverType(receiver.type);
          setServerAddress(options.url);
        }
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

  function handleVerifyButtonClicked() {
    let testOptions: IHttpReceiverOptions = {
      url: serverAddress,
    }

    let testReceiver: IReceiver = {
      type: ReceiverType.http,
      options: testOptions,
    }

    receiversApi.testReceiver(testReceiver).then(isVerified => {
      if (isVerified) {
        setVerificationColor('#99ff99')
        console.log('valid')
      } else {
        setVerificationColor('lightcoral')
        console.log('not so valid')
      }
    });
  }

  function handleSaveButtonClicked() {
    if (props.id === undefined) {
      receiversApi.putReceiver({
        type: ReceiverType.http,
        options: {
          url: serverAddress,
        }
      });
    } else {
      receiversApi.putReceiver({
        id: props.id,
        type: ReceiverType.http,
        options: {
          url: serverAddress,
        }
      });
    }

    history.goBack();
  }

  function handleFormKeyPress(e: any) {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }

  return (
    <div className={styles.content}>
      <Table id={styles.receiverSelectorTable} unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Receiver Type</p>
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

      <Table id={styles.buttonsTable} unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Server URL</p>
            </Table.Cell>
            <Table.Cell className={styles.tableCell}>
              <Input
                id={styles.serverAddressInput}
                onKeyPress={(e: any) => { handleFormKeyPress(e); }}
                defaultValue={serverAddress}
                onChange={(e, data) => { handleServerAddressChanged(data) }}>
              </Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button
                style={{ backgroundColor: verificationColor }}
                id={styles.verifyButton}
                onClick={handleVerifyButtonClicked}>
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
  );
}
