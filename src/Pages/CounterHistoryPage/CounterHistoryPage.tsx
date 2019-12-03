import React from 'react';
import CounterHistoryHeader from './CounterHistoryHeader/CounterHistoryHeader';
import CounterHistoryContent from './CounterHistoryContent/CounterHistoryContent';
import Helmet from 'react-helmet';

export default function CounterHistoryPage() {
  return (
    <React.Fragment>
      <Helmet><title>Counter History - CountLog</title></Helmet>
      <CounterHistoryHeader></CounterHistoryHeader>
      <CounterHistoryContent></CounterHistoryContent>
    </React.Fragment >
  );
}
