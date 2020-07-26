import React from 'react';
import StatisticsContent from './StatisticsContent/StatisticsContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function StatisticsPage() {
  document.title = "Counter Statistics - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>,
        ]}
        trailing={[]}
        title={"Counter Statistics"}
      />
      <StatisticsContent></StatisticsContent>
    </React.Fragment>
  );
}
