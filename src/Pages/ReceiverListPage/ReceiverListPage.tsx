import React from 'react';
import ReceiverListContent from './ReceiverListContent/ReceiverListContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function ReceiverListPage() {
  document.title = "Configure Receivers - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Receivers List"}
      />
      <ReceiverListContent></ReceiverListContent>
    </React.Fragment>
  );
}
