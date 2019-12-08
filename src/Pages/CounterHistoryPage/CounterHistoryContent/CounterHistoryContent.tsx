import React, { useState, useEffect, useContext } from 'react';
import { Table, Dropdown, Icon, Button, Pagination, Checkbox, DropdownProps } from 'semantic-ui-react';
import _ from 'lodash';
import { EventType } from '../../../CounterDatabase';
import styles from './CounterHistoryContent.module.scss';
import { useParams, useHistory } from 'react-router';
import { CountersContext, EventsContext } from '../../../App';

interface IParams {
  counterId: string;
  eventId: string;
}

export default function MainContent() {
  const [tableData, setTableData] = useState<any[]>([]);
  const [typeFilter, setTypeFilter] = useState<EventType | undefined>(undefined);
  const [hasAnnotationFilter, setAnnotationFilter] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);

  const history = useHistory();
  const params = useParams<IParams>();

  const countersApi = useContext(CountersContext);
  const eventsApi = useContext(EventsContext);

  useEffect(() => {
    const counterId = parseInt(params.counterId, 10);

    eventsApi.getEventsForCounter(counterId, undefined).then(events => {
      let list = [];

      for (let event of events) {
        list.push({
          id: event.id,
          type: event.type,
          timestamp: event.timestamp,
          annotation: event.annotation,
        });
      }

      list.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);

      setTableData(list);
    });
  }, [params, countersApi, eventsApi]);

  // TODO Duplicated in EventEditContext
  function displayTimestamp(rawTimestamp: string): string {
    let date = new Date(parseInt(rawTimestamp, 10));
    return date.toLocaleString();
  }

  // TODO Duplicated in EventEditContext
  function displayEventType(rawEventType: EventType): string {
    if (rawEventType === EventType.Increment) {
      return 'Increment';
    } else if (rawEventType === EventType.Decrement) {
      return 'Decrement';
    } else if (rawEventType === EventType.Mutate) {
      return 'Mutation';
    } else {
      // EventType.Uncategorized
      return 'Uncategorized';
    }
  }

  function handleFilterChanged(data: DropdownProps) {
    if (data.value === EventType.Increment) {
      setTypeFilter(EventType.Increment);
    } else if (data.value === EventType.Decrement) {
      setTypeFilter(EventType.Decrement);
    } else if (data.value === EventType.Mutate) {
      setTypeFilter(EventType.Mutate);
    } else {
      setTypeFilter(undefined);
    }

    setActivePage(1);
  }

  function handleEditEventClicked(eventId: number) {
    const counterId = parseInt(params.counterId, 10);
    history.push('/counterhistory/' + counterId + '/editevent/' + eventId);
  }

  function handlePageChange(event: any, data: any) {
    setActivePage(data.activePage);
  }

  let itemsPerPage = 5;

  // TODO This is total cancer.
  let totalPages = null;
  if (typeFilter === undefined && hasAnnotationFilter === false) {
    totalPages = Math.ceil(tableData.length / itemsPerPage);
  } else if (typeFilter !== undefined && hasAnnotationFilter === false) {
    totalPages = Math.ceil(tableData.filter(row => row['type'] === typeFilter).length / itemsPerPage);
  } else if (typeFilter === undefined && hasAnnotationFilter === true) {
    totalPages = Math.ceil(tableData.filter(row => row['annotation'] !== '').length / itemsPerPage);
  } else {
    totalPages = Math.ceil(
      tableData.filter(row => row['type'] === typeFilter && row['annotation'] !== '').length / itemsPerPage
    );
  }

  let itemLowerBound = itemsPerPage * (activePage - 1);
  let itemUpperBound = itemsPerPage * activePage;
  let counter = 0;

  let tableContent = null;

  if (tableData.length === 0) {
    tableContent = <Table.Row><Table.Cell>There are no events to display.</Table.Cell></Table.Row>;
  } else {
    tableContent = _.map(tableData, ({ id, type, timestamp, annotation }) => {
      let typeFilterCondition = (typeFilter === undefined || type === typeFilter);
      let hasAnnotationCondition = (hasAnnotationFilter === false || annotation !== '');

      if (typeFilterCondition && hasAnnotationCondition) {
        counter += 1;

        if (counter > itemLowerBound && counter <= itemUpperBound) {
          return (
            <Table.Row key={id}>
              <Table.Cell className={styles.eventTableCell}>
                <p>{displayEventType(type)}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{displayTimestamp(timestamp)}</p>
              </Table.Cell>
              <Table.Cell>
                <Button id={styles.myButton} onClick={() => { handleEditEventClicked(id); }} circular icon>
                  <Icon name="edit">
                  </Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        }
      }
    });
  }

  const options = [
    { key: 1, text: 'Increment Events Only', value: EventType.Increment },
    { key: 2, text: 'Decrement Events Only', value: EventType.Decrement },
    { key: 3, text: 'Mutate Events Only', value: EventType.Mutate },
  ];

  function handleCheckboxClicked() {
    setAnnotationFilter(!hasAnnotationFilter);
  }

  return (
    <div id={styles.mainContent} className={styles.content}>
      <Table unstackable id={styles.filterTable}>
        <Table.Body>
          <Table.Row className={styles.filterTableRow}>
            <Table.Cell>
              Event Type
            </Table.Cell>
            <Table.Cell>
              <Dropdown
                id={styles.dropdown}
                onChange={(e, data) => { handleFilterChanged(data); }}
                placeholder='Filter'
                options={options}
                clearable
                selection>
              </Dropdown>
            </Table.Cell>
          </Table.Row>
          <Table.Row className={styles.filterTableRow}>
            <Table.Cell>
              Has Annotation
            </Table.Cell>
            <Table.Cell>
              <div id={styles.checkbox}>
                <Checkbox
                  checked={hasAnnotationFilter}
                  onClick={handleCheckboxClicked}>
                </Checkbox>
              </div>

            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table striped unstackable id={styles.mainTable}>
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
