import React from 'react';
import Helmet from 'react-helmet';
import ReceiverCreateHeader from './ReceiverCreateHeader/ReceiverCreateHeader';
import ReceiverCreateContent from './ReceiverCreateContent/ReceiverCreateContent';

export default function ReceiverCreatePage() {
  return (
    <React.Fragment>
      <Helmet><title>Configure Receivers - CountLog</title></Helmet>
      <ReceiverCreateHeader></ReceiverCreateHeader>
      <ReceiverCreateContent></ReceiverCreateContent>
    </React.Fragment>
  );
}
