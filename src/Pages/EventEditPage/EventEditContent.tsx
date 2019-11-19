import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import './EventEditContent.css';

interface Props extends RouteComponentProps<any> {}

interface State {}

class EventEditContent extends Component<Props, State> {
  render() {
    let counterId = parseInt(this.props.match.params['counterId'])
    let eventId = parseInt(this.props.match.params['eventId'])

    console.log(counterId, eventId)

    return (
      <div className="content">
        TODO
      </div>
    )
  }
}

export default withRouter(EventEditContent);
