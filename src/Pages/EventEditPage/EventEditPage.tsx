import React from 'react';
import EventEditHeader from './EventEditHeader/EventEditHeader';
import EventEditContent from './EventEditContent/EventEditContent';

export default function EventEditPage() {
  document.title = "Edit Event - CountLog";

  return (
    <React.Fragment>
      <EventEditHeader></EventEditHeader>
      <EventEditContent></EventEditContent>
    </React.Fragment>
  );
}
