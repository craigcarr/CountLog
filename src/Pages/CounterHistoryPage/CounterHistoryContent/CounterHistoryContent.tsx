import React, { useState, useEffect, useContext } from 'react';
import { Table, Dropdown, Icon, Button, Pagination } from 'semantic-ui-react';
import _ from 'lodash';
import { EventType } from '../../../CounterDatabase';
import styles from './CounterHistoryContent.module.scss';
import { useParams, useHistory } from 'react-router';
import { CountersContext, LoggingContext } from '../../../App';

export default function MainContent() {
  const [tableData, setTableData] = useState<any[]>([]);
  const [filter, setFilter] = useState<EventType | undefined>(undefined);
  const [activePage, setActivePage] = useState<number>(1);

  const history = useHistory();
  const params = useParams<any>();

  const loggingApi = useContext(LoggingContext);
  const countersApi = useContext(CountersContext);

  useEffect(() => {
    let counterId = parseInt(params['counterId'], 10)

    countersApi.getEventsForCounter(counterId, undefined).then(events => {
      let list = [];

      for (let event of events) {
        list.push({
          id: event.id,
          type: event.type,
          timestamp: event.timestamp,
        });
      }

      list.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)

      setTableData(list);
    })
  }, [params, countersApi]);

  function displayTimestamp(timestamp: string): string {
    let date = new Date(parseInt(timestamp, 10));
    return date.toLocaleString();
  }

  function getDisplayNameForType(type: EventType): string {
    if (type === EventType.Increment) {
      return 'Increment';
    } else if (type === EventType.Decrement) {
      return 'Decrement';
    } else if (type === EventType.Mutate) {
      return 'Mutation';
    } else {
      loggingApi.error('type has an unknown EventType')
      return 'Unknown Event Type';
    }
  }

  function handleFilterChanged(data: any) {
    if (data.value === EventType.Increment) {
      setFilter(EventType.Increment);
    } else if (data.value === EventType.Decrement) {
      setFilter(EventType.Decrement);
    } else if (data.value === EventType.Mutate) {
      setFilter(EventType.Mutate);
    } else {
      setFilter(undefined);
    }

    setActivePage(1);
  }

  function editEventClicked(eventId: number) {
    let counterId = parseInt(params['counterId'], 10);
    history.push('/counterhistory/' + counterId + '/editevent/' + eventId);
  }

  function handlePageChange(event: any, data: any) {
    setActivePage(data.activePage);
  }

  let itemsPerPage = 5;

  let totalPages = null;
  if (filter === undefined) {
    totalPages = Math.ceil(tableData.length / itemsPerPage);
  } else {
    totalPages = Math.ceil(tableData.filter(row => row['type'] === filter).length / itemsPerPage);
  }

  let itemLowerBound = itemsPerPage * (activePage - 1);
  let itemUpperBound = itemsPerPage * activePage;
  let counter = 0;

  let tableContent = null;

  if (tableData.length === 0) {
    tableContent = <Table.Row><Table.Cell>There are no events to display.</Table.Cell></Table.Row>
  } else {
    tableContent = _.map(tableData, ({ id, type, timestamp }) => {
      if (filter === undefined || type === filter) {
        counter += 1;

        if (counter > itemLowerBound && counter <= itemUpperBound) {
          return (
            <Table.Row key={id}>
              <Table.Cell className={styles.eventTableCell}>
                <p>{getDisplayNameForType(type)}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{displayTimestamp(timestamp)}</p>
              </Table.Cell>
              <Table.Cell>
                <Button id={styles.myButton} onClick={() => { editEventClicked(id) }} circular icon>
                  <Icon name="edit">
                  </Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
          )
        }
      }
    });
  }

  const options = [
    { key: 1, text: 'Increment Events Only', value: EventType.Increment },
    { key: 2, text: 'Decrement Events Only', value: EventType.Decrement },
    { key: 3, text: 'Mutate Events Only', value: EventType.Mutate },
  ];

  return (
    <div id={styles.mainContent} className={styles.content}>
      <br></br>

      <Dropdown
        id={styles.dropdown}
        onChange={(e, data) => { handleFilterChanged(data); }}
        placeholder='Filter'
        options={options}
        clearable
        selection>
      </Dropdown>

      <Table striped unstackable>
        <Table.Body>
          {tableContent}
        </Table.Body>
      </Table>

      <Pagination
        className={styles.pagination}
        boundaryRange={1}
        activePage={activePage}
        firstItem={null}
        lastItem={null}
        siblingRange={0}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
