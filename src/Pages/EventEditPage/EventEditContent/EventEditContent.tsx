import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import styles from './EventEditContent.module.scss';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class EventEditContent extends Component<IProps, IState> {
  render() {
    let counterId = parseInt(this.props.match.params['counterId'], 10)
    let eventId = parseInt(this.props.match.params['eventId'], 10)

    console.log(counterId, eventId)

    return (
      <div className={styles.content}>
        TODO
      </div>
    )
  }
}

export default withRouter(EventEditContent);
