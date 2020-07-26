import React from 'react';
import CounterEditContent from './CounterEditContent/CounterEditContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function CounterEditPage() {
  document.title = "Edit Counter - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Edit Counter"}
      />
      <CounterEditContent></CounterEditContent>
    </React.Fragment>
  );
}
