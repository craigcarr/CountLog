import React, { useContext } from "react";
import { Table, Button } from "semantic-ui-react";
import styles from "./ReceiverDeleteContent.module.scss";
import { ReceiversContext } from "../../../App";
import { useParams, useHistory } from "react-router";

interface IParams {
  receiverId: string;
}

export default function ReceiverDeleteContent() {
  const history = useHistory();
  const params = useParams<IParams>();

  const receiversApi = useContext(ReceiversContext);

  function handleDeleteButtonClicked() {
    const receiverId = parseInt(params.receiverId, 10);

    receiversApi.deleteReceiver(receiverId).then(() => {
      history.goBack();
    });
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={1}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <p>Are you sure you want to delete this receiver? This receiver will not receive events anymore.</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button id={styles.deleteButton} onClick={handleDeleteButtonClicked}>
                Confirm Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
