import React from 'react';
import CounterHistoryHeader from './CounterHistoryHeader/CounterHistoryHeader';
import CounterHistoryContent from './CounterHistoryContent/CounterHistoryContent';

export default function CounterHistoryPage() {
  return (
    <React.Fragment>
      <CounterHistoryHeader></CounterHistoryHeader>
      <CounterHistoryContent></CounterHistoryContent>
    </React.Fragment >
  );
}
