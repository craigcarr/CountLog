import React from 'react';
import CounterCreateHeader from './CounterCreateHeader/CounterCreateHeader';
import CounterCreateContent from './CounterCreateContent/CounterCreateContent';

export default function CounterCreatePage() {
  return (
    <React.Fragment>
      <CounterCreateHeader></CounterCreateHeader>
      <CounterCreateContent id={undefined}></CounterCreateContent>
    </React.Fragment>
  );
}
