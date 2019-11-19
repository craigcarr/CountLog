import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CountersAPI from '../../Interfaces/CountersAPI';
import './EventEditContent.css';

type Props = {}

type State = {}

class EventEditContent extends Component<Props, State> {
  render() {
    // @ts-ignore
    let counterId = parseInt(this.props.match.params['counterId'])

    // @ts-ignore
    let eventId = parseInt(this.props.match.params['eventId'])

    console.log(counterId, eventId)

    return (
      <div className="content">
        TODO
      </div>
    )
  }
}

// @ts-ignore
export default withRouter(EventEditContent);
