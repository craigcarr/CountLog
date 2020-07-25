import React from 'react';
import ReceiverCreateContent from './ReceiverCreateContent/ReceiverCreateContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function ReceiverCreatePage() {
  document.title = "Create Receiver - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Add Receiver"}
      />
      <ReceiverCreateContent id={undefined}></ReceiverCreateContent>
    </React.Fragment>
  );
}
