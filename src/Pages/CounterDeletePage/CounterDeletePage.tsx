import React from 'react';
import CounterDeleteContent from './CounterDeleteContent/CounterDeleteContent';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';
import AppBar from '../../Components/AppBar/AppBar';

export default function CounterDeletePage() {
  document.title = "Delete Counter - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Delete Counter"}
      />
      <CounterDeleteContent></CounterDeleteContent>
    </React.Fragment>
  );
}
