import React, { useEffect, useContext, useState } from 'react';
import styles from './EventEditContent.module.scss';
import { useParams, useHistory } from 'react-router';
import { Table, TextArea, Button, Icon } from 'semantic-ui-react';
import { CountersContext, EventsContext } from '../../../App';
import { EventType, IEvent } from '../../../CounterDatabase';

export default function EventEditContent() {
  const [eventType, setEventType] = useState<EventType>(EventType.Uncategorized);
  const [timestamp, setTimestamp] = useState<string>('');
  const [annotation, setAnnotation] = useState<string>('');

  const history = useHistory();
  const params = useParams<any>();

  const countersApi = useContext(CountersContext);
  const eventsApi = useContext(EventsContext);

  let counterId = parseInt(params['counterId'], 10);
  let eventId = parseInt(params['eventId'], 10);

  useEffect(() => {
    eventsApi.getEventById(eventId).then(event => {
      setEventType(event.type);
      setTimestamp(event.timestamp);
      setAnnotation(event.annotation);
    });
  }, [countersApi, eventsApi, eventId])

  function displayTimestamp(rawTimestamp: string): string {
    let date = new Date(parseInt(rawTimestamp, 10));
    return date.toLocaleString();
  }

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

  function handleSaveCounterClicked() {
    let modifiedEvent: IEvent = {
      id: eventId,
      counterId: counterId,
      type: eventType,
      timestamp: timestamp,
      annotation: annotation,
    }

    eventsApi.putEvent(modifiedEvent);

    history.goBack();
  }

  function handleTextAreaChanged(data: any) {
    setAnnotation(data.value);
  }

  return (
    <div className={styles.content}>
      <Table unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Event Type</p>
            </Table.Cell>
            <Table.Cell>
              <p>{displayEventType(eventType)}</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Timestamp</p>
            </Table.Cell>
            <Table.Cell>
              <p>{displayTimestamp(timestamp)}</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className={styles.tableCell}>
              <p>Annotation</p>
            </Table.Cell>
            <Table.Cell>
              <TextArea
                className={styles.textarea}
                onChange={(e, data) => { handleTextAreaChanged(data) }}
                value={annotation}>
              </TextArea>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Button
        id={styles.saveCounterBtn}
        onClick={handleSaveCounterClicked}
        icon
        circular>
        <Icon name="save">
        </Icon>
      </Button>
    </div>
  )
}
