import React from 'react';
import Helmet from 'react-helmet';
import ReceiverEditHeader from './ReceiverEditHeader/ReceiverEditHeader';
import ReceiverEditContent from './ReceiverEditContent/ReceiverEditContent';

export default function ReceiverEditPage() {
  return (
    <React.Fragment>
      <Helmet><title>Configure Receivers - CountLog</title></Helmet>
      <ReceiverEditHeader></ReceiverEditHeader>
      <ReceiverEditContent></ReceiverEditContent>
    </React.Fragment>
  );
}
