import React from 'react';
import ReceiverEditContent from './ReceiverEditContent/ReceiverEditContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function ReceiverEditPage() {
  document.title = "Edit Receiver - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Edit Receiver"}
      />
      <ReceiverEditContent></ReceiverEditContent>
    </React.Fragment>
  );
}
