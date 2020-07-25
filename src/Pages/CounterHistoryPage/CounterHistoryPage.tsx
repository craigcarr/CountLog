import React from 'react';
import CounterHistoryContent from './CounterHistoryContent/CounterHistoryContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function CounterHistoryPage() {
  document.title = "Counter History - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Counter History"}
      />
      <CounterHistoryContent></CounterHistoryContent>
    </React.Fragment >
  );
}
