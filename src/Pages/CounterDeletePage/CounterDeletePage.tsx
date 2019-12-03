import React from 'react';
import CounterDeleteHeader from './CounterDeleteHeader/CounterDeleteHeader';
import CounterDeleteContent from './CounterDeleteContent/CounterDeleteContent';
import Helmet from 'react-helmet';

export default function CounterDeletePage() {
  return (
    <React.Fragment>
      <Helmet><title>Delete Counter - CountLog</title></Helmet>
      <CounterDeleteHeader></CounterDeleteHeader>
      <CounterDeleteContent></CounterDeleteContent>
    </React.Fragment>
  );
}
