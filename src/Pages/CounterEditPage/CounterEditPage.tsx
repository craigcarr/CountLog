import React from 'react';
import CounterEditHeader from './CounterEditHeader/CounterEditHeader';
import CounterEditContent from './CounterEditContent/CounterEditContent';

export default function CounterEditPage() {
  return (
    <React.Fragment>
      <CounterEditHeader></CounterEditHeader>
      <CounterEditContent></CounterEditContent>
    </React.Fragment>
  );
}
