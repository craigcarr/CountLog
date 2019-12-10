import React from 'react';
import ReceiverDeleteHeader from './ReceiverDeleteHeader/ReceiverDeleteHeader';
import ReceiverDeleteContent from './ReceiverDeleteContent/ReceiverDeleteContent';

export default function ReceiverDeletePage() {
  document.title = "Delete Receiver - CountLog";

  return (
    <React.Fragment>
      <ReceiverDeleteHeader></ReceiverDeleteHeader>
      <ReceiverDeleteContent></ReceiverDeleteContent>
    </React.Fragment>
  );
}
