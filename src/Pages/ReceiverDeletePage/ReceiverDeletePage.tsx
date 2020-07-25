import React from 'react';
import ReceiverDeleteContent from './ReceiverDeleteContent/ReceiverDeleteContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function ReceiverDeletePage() {
  document.title = "Delete Receiver - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Delete Receiver"}
      />
      <ReceiverDeleteContent></ReceiverDeleteContent>
    </React.Fragment>
  );
}
