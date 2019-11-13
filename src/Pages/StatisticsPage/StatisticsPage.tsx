import React, { Component } from 'react';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';
import StatisticsHeader from '../../Headers/StatisticsHeader/StatisticsHeader';
import StatisticsContent from '../../Contents/StatisticsContent/StatisticsContent';
import CounterDatabase from '../../CounterDatabase';

type Props = {
  db: CounterDatabase,
}

type State = {}

class StatisticsPage extends Component<Props, State> {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <StatisticsHeader></StatisticsHeader>
        <StatisticsContent></StatisticsContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default StatisticsPage;
