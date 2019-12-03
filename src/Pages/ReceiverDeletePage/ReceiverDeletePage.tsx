import React from 'react';
import Helmet from 'react-helmet';
import ReceiverDeleteHeader from './ReceiverDeleteHeader/ReceiverDeleteHeader';
import ReceiverDeleteContent from './ReceiverDeleteContent/ReceiverDeleteContent';

export default function ReceiverDeletePage() {
  return (
    <React.Fragment>
      <Helmet><title>Configure Receivers - CountLog</title></Helmet>
      <ReceiverDeleteHeader></ReceiverDeleteHeader>
      <ReceiverDeleteContent></ReceiverDeleteContent>
    </React.Fragment>
  );
}
