import React, { useState, useEffect, useContext } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import styles from "./ReceiverListContent.module.scss";
import { useHistory } from "react-router";
import { ReceiversContext } from "../../../App";

export default function ReceiverListContent() {
  const [tableData, setHttpTableData] = useState<any[]>([]);

  const history = useHistory();

  const receiversApi = useContext(ReceiversContext);

  useEffect(() => {
    receiversApi.getAllReceivers().then(receivers => {
      setHttpTableData(receivers)
    });
  }, [receiversApi]);

  function handleCreateButtonClicked() {
    history.push('/receivercreate');
  }

  function handleEditButtonClicked(receiverId: number) {
    history.push('/receiveredit/' + receiverId);

  }

  function handleDeleteButtonClicked(receiverId: number) {
    history.push('/receiverdelete/' + receiverId);
  }

  let tableHeader = null;
  let tableContent = null;

  if (tableData.length === 0) {
    tableHeader = null;

    tableContent = (
      <Table.Row>
        <Table.Cell>
          <p>There are no receivers to display.</p>
        </Table.Cell>
      </Table.Row>);
  } else {
    tableHeader = (
      <Table.Row>
        <Table.HeaderCell width={1}>Type</Table.HeaderCell>
        <Table.HeaderCell width={2}>Name</Table.HeaderCell>
        <Table.HeaderCell width={1}>Edit</Table.HeaderCell>
        <Table.HeaderCell width={1}>Delete</Table.HeaderCell>
      </Table.Row>
    );

    tableContent = tableData.map(({ id, options }: any) => (
      <Table.Row key={id}>
        <Table.Cell>
          <p>{options['type'].toUpperCase()}</p>
        </Table.Cell>
        <Table.Cell className={styles.urlCell}>
          <p>{options['url']}</p>
        </Table.Cell>
        <Table.Cell>
          <Button className={styles.myButton} onClick={() => { handleEditButtonClicked(id) }} circular icon>
            <Icon name="edit">
            </Icon>
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Button className={styles.myButton} onClick={() => { handleDeleteButtonClicked(id) }} circular icon>
            <Icon name="cancel">
            </Icon>
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  }

  return (
    <div className={styles.content}>

      <Table unstackable striped columns={4} fixed>
        <Table.Header>
          {tableHeader}
        </Table.Header>
        <Table.Body>
          {tableContent}
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
