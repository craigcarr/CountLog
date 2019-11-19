import React, { Component } from 'react';
import StatisticsHeader from './StatisticsHeader';
import StatisticsContent from './StatisticsContent';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class StatisticsPage extends Component<IProps> {
  render() {
    return (
      <React.Fragment>
        <StatisticsHeader></StatisticsHeader>
        <StatisticsContent counterId={parseInt(this.props.match.params['counterId'], 10)}></StatisticsContent>
      </React.Fragment>
    );
  }
}

export default withRouter(StatisticsPage);
