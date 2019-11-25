import React, { Component } from 'react';
import StatisticsHeader from './StatisticsHeader/StatisticsHeader';
import StatisticsContent from './StatisticsContent/StatisticsContent';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class StatisticsPage extends Component<IProps> {
  render() {
    return (
      <React.Fragment>
        <StatisticsHeader></StatisticsHeader>
        <StatisticsContent></StatisticsContent>
      </React.Fragment>
    );
  }
}

export default withRouter(StatisticsPage);
