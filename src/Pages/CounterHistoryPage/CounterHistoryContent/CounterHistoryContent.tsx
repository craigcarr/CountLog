import React, { useState, useEffect, useContext } from 'react';
import { Table, Dropdown, Icon, Button, Pagination, Checkbox, DropdownProps } from 'semantic-ui-react';
import { EventType, IEvent } from '../../../CounterDatabase';
import styles from './CounterHistoryContent.module.scss';
import { useParams, useHistory } from 'react-router';
import { EventsContext } from '../../../App';

interface IParams {
  counterId: string;
  eventId: string;
}

export default function MainContent() {
  const [tableData, setTableData] = useState<IEvent[]>([]);
  const [typeFilter, setTypeFilter] = useState<EventType | undefined>(undefined);
  const [hasAnnotationFilter, setAnnotationFilter] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);

  const history = useHistory();
  const params = useParams<IParams>();

  const eventsApi = useContext(EventsContext);

  useEffect(() => {
    const counterId = parseInt(params.counterId, 10);

    eventsApi.getEventsForCounter(counterId, undefined).then(events => {
      events.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);
      setTableData(events);
    });
  }, [params, eventsApi]);

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

  function handleEditEventClicked(eventId: number | undefined) {
    const counterId = parseInt(params.counterId, 10);
    history.push('/counterhistory/' + counterId + '/editevent/' + eventId);
  }

  function handlePageChange(event: any, data: any) {
    setActivePage(data.activePage);
  }

  let itemsPerPage = 5;

  let filter1 = null;
  if (typeFilter === undefined) {
    filter1 = ((row: IEvent) => true);
  } else {
    filter1 = ((row: IEvent) => row.type === typeFilter);
  }

  let filter2 = null;
  if (hasAnnotationFilter === false) {
    filter2 = ((row: IEvent) => true);
  } else {
    filter2 = ((row: IEvent) => row.annotation !== '');
  }

  let totalPages = Math.ceil(
    tableData.filter(filter1).filter(filter2).length / itemsPerPage
  );

  let itemLowerBound = itemsPerPage * (activePage - 1);
  let itemUpperBound = itemsPerPage * activePage;
  let counter = 0;

  let tableContent = null;

  if (tableData.length === 0) {
    tableContent =
      <Table.Row>
        <Table.Cell>
          <p>There are no events to display.</p>
        </Table.Cell>
      </Table.Row>;
  } else {
    tableContent = tableData.map(setting => {
      let rv = [];

      let typeFilterCondition = (typeFilter === undefined || setting.type === typeFilter);
      let hasAnnotationCondition = (hasAnnotationFilter === false || setting.annotation !== '');

      if (typeFilterCondition && hasAnnotationCondition) {
        counter += 1;

        if (counter > itemLowerBound && counter <= itemUpperBound) {
          rv.push(
            // Make the whole row clickable, but keep the "edit" button to indicate clickability.
            <Table.Row key={setting.id} onClick={() => { handleEditEventClicked(setting.id); }}>
              <Table.Cell className={styles.eventTableCell}>
                <p>{displayEventType(setting.type)}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{displayTimestamp(setting.timestamp)}</p>
              </Table.Cell>
              <Table.Cell>
                <Button aria-label="Edit Button" id={styles.myButton} circular icon>
                  <Icon name="edit">
                  </Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        }
      }

      return rv;
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
              <p>Event Type</p>
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
              <p>Has Annotation</p>
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
