import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';
import EventEditContent from './EventEditContent/EventEditContent';

export default function EventEditPage() {
  document.title = "Edit Event - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Edit Event"}
      />
      <EventEditContent></EventEditContent>
    </React.Fragment>
  );
}
