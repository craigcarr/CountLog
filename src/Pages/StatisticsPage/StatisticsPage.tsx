import React from 'react';
import StatisticsHeader from './StatisticsHeader/StatisticsHeader';
import StatisticsContent from './StatisticsContent/StatisticsContent';

export default function StatisticsPage() {
  return (
    <React.Fragment>
      <StatisticsHeader></StatisticsHeader>
      <StatisticsContent></StatisticsContent>
    </React.Fragment>
  );
}
