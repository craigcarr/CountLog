import React from 'react';
import CounterDeleteHeader from './CounterDeleteHeader/CounterDeleteHeader';
import CounterDeleteContent from './CounterDeleteContent/CounterDeleteContent';

export default function CounterDeletePage() {
  document.title = "Delete Counter - CountLog";

  return (
    <React.Fragment>
      <CounterDeleteHeader></CounterDeleteHeader>
      <CounterDeleteContent></CounterDeleteContent>
    </React.Fragment>
  );
}
