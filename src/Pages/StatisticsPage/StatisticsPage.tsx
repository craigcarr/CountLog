import React from 'react';
import StatisticsHeader from './StatisticsHeader/StatisticsHeader';
import StatisticsContent from './StatisticsContent/StatisticsContent';
import Helmet from 'react-helmet';

export default function StatisticsPage() {
  return (
    <React.Fragment>
      <Helmet><title>Counter Statistics - CountLog</title></Helmet>
      <StatisticsHeader></StatisticsHeader>
      <StatisticsContent></StatisticsContent>
    </React.Fragment>
  );
}
