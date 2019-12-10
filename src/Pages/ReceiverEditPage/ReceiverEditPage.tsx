import React from 'react';
import ReceiverEditHeader from './ReceiverEditHeader/ReceiverEditHeader';
import ReceiverEditContent from './ReceiverEditContent/ReceiverEditContent';

export default function ReceiverEditPage() {
  document.title = "Edit Receiver - CountLog";

  return (
    <React.Fragment>
      <ReceiverEditHeader></ReceiverEditHeader>
      <ReceiverEditContent></ReceiverEditContent>
    </React.Fragment>
  );
}
