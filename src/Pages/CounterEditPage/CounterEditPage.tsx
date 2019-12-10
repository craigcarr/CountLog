import React from 'react';
import CounterEditHeader from './CounterEditHeader/CounterEditHeader';
import CounterEditContent from './CounterEditContent/CounterEditContent';

export default function CounterEditPage() {
  document.title = "Edit Counter - CountLog";

  return (
    <React.Fragment>
      <CounterEditHeader></CounterEditHeader>
      <CounterEditContent></CounterEditContent>
    </React.Fragment>
  );
}
