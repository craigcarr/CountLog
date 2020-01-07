import React, { useState, useEffect, useContext } from "react";
import { Table, Select, Input, Button } from "semantic-ui-react";
import styles from "./ReceiverCreateContent.module.scss";
import { ReceiversContext } from "../../../App";
import { useHistory } from "react-router";
import { IReceiver, ReceiverType, IHttpsReceiverOptions } from "../../../CounterDatabase";

interface IProps {
  id: number | undefined;
}

export default function ReceiverCreateContent(props: IProps) {
  const [selectedReceiverType, setSelectedReceiverType] = useState<string>(ReceiverType.https);
  const [serverAddress, setServerAddress] = useState<string>('');
  const [verificationColor, setVerificationColor] = useState<string>('');

  const history = useHistory();

  const receiversApi = useContext(ReceiversContext);

  useEffect(() => {
    if (props.id !== undefined) {
      receiversApi.getReceiverById(props.id).then(receiver => {
        if (receiver.type === ReceiverType.https) {
          let options: IHttpsReceiverOptions = receiver.options;

          setSelectedReceiverType(receiver.type);
          setServerAddress(options.url);
        }
      });
    }
  }, [props.id, receiversApi]);

  const receiverTypes = [
    { key: 'https', value: 'https', text: 'HTTPS' },
  ]

  function handleSelectedReceiverChange(data: any) {
    setSelectedReceiverType(data.value);
  }

  function handleServerAddressChanged(data: any) {
    setServerAddress(data.value);
  }

  function handleVerifyButtonClicked() {
    let testOptions: IHttpsReceiverOptions = {
      url: serverAddress,
    }

    let testReceiver: IReceiver = {
      type: ReceiverType.https,
      options: testOptions,
    }

    receiversApi.testReceiver(testReceiver).then(isVerified => {
      if (isVerified) {
        setVerificationColor('#99ff99')
      } else {
        setVerificationColor('lightcoral')
      }
    });
  }

  function handleSaveButtonClicked() {
    if (props.id === undefined) {
      receiversApi.putReceiver({
        type: ReceiverType.https,
        options: {
          url: serverAddress,
        }
      });
    } else {
      receiversApi.putReceiver({
        id: props.id,
        type: ReceiverType.https,
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
            <Table.Cell>
              <p>Receiver Type</p>
            </Table.Cell>
            <Table.Cell>
              <Select
                value={selectedReceiverType}
                onChange={(e, data) => { handleSelectedReceiverChange(data) }}
                options={receiverTypes} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table id={styles.optionsTable} unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <p>Server URL</p>
            </Table.Cell>
            <Table.Cell>
              <Input
                onKeyPress={(e: any) => { handleFormKeyPress(e); }}
                defaultValue={serverAddress}
                onChange={(e, data) => { handleServerAddressChanged(data) }}>
              </Input>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table id={styles.buttonsTable} columns={2} unstackable>
        <Table.Body>
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
              <Button
                id={styles.saveButton}
                onClick={handleSaveButtonClicked}>
                Save
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table columns={2} unstackable>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <p>• Your phone must be on the same network as the HTTP server.</p>
              <p>• Only HTTPS (encrypted) is supported. Regular HTTP will get blocked.</p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
