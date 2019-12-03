import React from 'react';
import CounterCreateHeader from './CounterCreateHeader/CounterCreateHeader';
import CounterCreateContent from './CounterCreateContent/CounterCreateContent';
import Helmet from 'react-helmet';

export default function CounterCreatePage() {
  return (
    <React.Fragment>
      <Helmet><title>Create Counter - CountLog</title></Helmet>
      <CounterCreateHeader></CounterCreateHeader>
      <CounterCreateContent id={undefined}></CounterCreateContent>
    </React.Fragment>
  );
}
