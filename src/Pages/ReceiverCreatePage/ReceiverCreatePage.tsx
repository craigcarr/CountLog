import React from 'react';
import Helmet from 'react-helmet';
import ReceiverCreateHeader from './ReceiverCreateHeader/ReceiverCreateHeader';
import ReceiverCreateContent from './ReceiverCreateContent/ReceiverCreateContent';

export default function ReceiverCreatePage() {
  return (
    <React.Fragment>
      <Helmet><title>Create Receiver - CountLog</title></Helmet>
      <ReceiverCreateHeader></ReceiverCreateHeader>
      <ReceiverCreateContent id={undefined}></ReceiverCreateContent>
    </React.Fragment>
  );
}
