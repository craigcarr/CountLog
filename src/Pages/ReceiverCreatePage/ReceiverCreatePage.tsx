import React from 'react';
import ReceiverCreateHeader from './ReceiverCreateHeader/ReceiverCreateHeader';
import ReceiverCreateContent from './ReceiverCreateContent/ReceiverCreateContent';

export default function ReceiverCreatePage() {
  document.title = "Create Receiver - CountLog";

  return (
    <React.Fragment>
      <ReceiverCreateHeader></ReceiverCreateHeader>
      <ReceiverCreateContent id={undefined}></ReceiverCreateContent>
    </React.Fragment>
  );
}
