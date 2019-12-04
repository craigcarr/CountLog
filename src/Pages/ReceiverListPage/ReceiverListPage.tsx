import React from 'react';
import Helmet from 'react-helmet';
import ReceiverListHeader from './ReceiverListHeader/ReceiverListHeader';
import ReceiverListContent from './ReceiverListContent/ReceiverListContent';

export default function ReceiverListPage() {
  return (
    <React.Fragment>
      <Helmet><title>Configure Receivers - CountLog</title></Helmet>
      <ReceiverListHeader></ReceiverListHeader>
      <ReceiverListContent></ReceiverListContent>
    </React.Fragment>
  );
}
