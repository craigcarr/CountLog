import React from 'react';
import styles from './EventEditContent.module.scss';
import { useParams } from 'react-router';

export default function EventEditContent() {
  let params = useParams<any>();

  let counterId = parseInt(params['counterId'], 10)
  let eventId = parseInt(params['eventId'], 10)

  console.log(counterId, eventId)

  return (
    <div className={styles.content}>
      TODO
    </div>
  )
}
