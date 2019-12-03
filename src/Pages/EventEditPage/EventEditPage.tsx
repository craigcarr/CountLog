import React from 'react';
import EventEditHeader from './EventEditHeader/EventEditHeader';
import EventEditContent from './EventEditContent/EventEditContent';
import Helmet from 'react-helmet';

export default function EventEditPage() {
  return (
    <React.Fragment>
      <Helmet><title>Edit Event - CountLog</title></Helmet>
      <EventEditHeader></EventEditHeader>
      <EventEditContent></EventEditContent>
    </React.Fragment>
  );
}
