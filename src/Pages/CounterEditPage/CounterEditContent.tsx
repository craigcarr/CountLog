import React, { Component } from 'react';
import CreateContent from '../CreatePage/CreateContent';
import { withRouter, RouteComponentProps } from 'react-router';
import './CounterEditContent.css';

interface Props extends RouteComponentProps<any> {}

interface State {}

class CounterEditContent extends Component<Props, State> {
  render() {
    let counterId = parseInt(this.props.match.params['counterId'])

    return (
      <CreateContent id={counterId}></CreateContent>
    )
  }
}

export default withRouter(CounterEditContent);
