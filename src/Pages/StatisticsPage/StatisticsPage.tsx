import React, { Component } from 'react';
import StatisticsHeader from './StatisticsHeader';
import StatisticsContent from './StatisticsContent';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any> {}

interface State {}

class StatisticsPage extends Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <StatisticsHeader></StatisticsHeader>
        <StatisticsContent counterId={parseInt(this.props.match.params['counterId'])}></StatisticsContent>
      </React.Fragment>
    );
  }
}

export default withRouter(StatisticsPage);
