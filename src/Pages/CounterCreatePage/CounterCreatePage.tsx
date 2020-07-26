import React from 'react';
import CounterCreateContent from './CounterCreateContent/CounterCreateContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function CounterCreatePage() {
  document.title = "Create Counter - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="cancel"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Create Counter"}
      />
      <CounterCreateContent id={undefined}></CounterCreateContent>
    </React.Fragment>
  );
}
