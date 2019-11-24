import React, { Component } from 'react';
import EventEditHeader from './EventEditHeader/EventEditHeader';
import EventEditContent from './EventEditContent/EventEditContent';

class EventEditPage extends Component {
  render() {
    return (
      <React.Fragment>
        <EventEditHeader></EventEditHeader>
        <EventEditContent></EventEditContent>
      </React.Fragment>
    );
  }
}

export default EventEditPage;
