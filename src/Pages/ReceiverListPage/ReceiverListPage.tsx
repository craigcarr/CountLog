import React from 'react';
import ReceiverListHeader from './ReceiverListHeader/ReceiverListHeader';
import ReceiverListContent from './ReceiverListContent/ReceiverListContent';

export default function ReceiverListPage() {
  document.title = "Configure Receivers - CountLog";

  return (
    <React.Fragment>
      <ReceiverListHeader></ReceiverListHeader>
      <ReceiverListContent></ReceiverListContent>
    </React.Fragment>
  );
}
