import React, { Component } from 'react';
import './CounterEditContent.css';
import CreateContent from '../CreatePage/CreateContent';
import { withRouter } from 'react-router';

type Props = {}

type State = {}

class CounterEditContent extends Component<Props, State> {
  render() {
    // @ts-ignore
    let counterId = parseInt(this.props.match.params['counterId'])

    return (
      <CreateContent id={counterId}></CreateContent>
    )
  }
}

// @ts-ignore
export default withRouter(CounterEditContent);
