import React, { Component } from 'react';
import StatisticsHeader from './StatisticsHeader';
import StatisticsContent from './StatisticsContent';

type Props = {}

type State = {}

class StatisticsPage extends Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <StatisticsHeader></StatisticsHeader>
        {/*
        // @ts-ignore */}
        <StatisticsContent counterId={parseInt(this.props.match.params['counterId'])}></StatisticsContent>
      </React.Fragment>
    );
  }
}

export default StatisticsPage;
