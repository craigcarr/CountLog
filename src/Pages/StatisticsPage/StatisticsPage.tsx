import React, { Component } from 'react';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';
import StatisticsHeader from '../../Headers/StatisticsHeader/StatisticsHeader';
import StatisticsContent from '../../Contents/StatisticsContent/StatisticsContent';

type Props = {}

type State = {}

class StatisticsPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <StatisticsHeader></StatisticsHeader>
        {/*
        // @ts-ignore */}
        <StatisticsContent counterId={parseInt(this.props.match.params['counterId'])}></StatisticsContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default StatisticsPage;
