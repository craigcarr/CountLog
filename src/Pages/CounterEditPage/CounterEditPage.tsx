import React from 'react';
import CounterEditHeader from './CounterEditHeader/CounterEditHeader';
import CounterEditContent from './CounterEditContent/CounterEditContent';
import Helmet from 'react-helmet';

export default function CounterEditPage() {
  return (
    <React.Fragment>
      <Helmet><title>Edit Counter - CountLog</title></Helmet>
      <CounterEditHeader></CounterEditHeader>
      <CounterEditContent></CounterEditContent>
    </React.Fragment>
  );
}
