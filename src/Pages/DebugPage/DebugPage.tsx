import React from 'react';
import DebugContent from './DebugContent/DebugContent';
import AppBar from '../../Components/AppBar/AppBar';
import HeaderBackButton from '../../Components/HeaderBackButton/HeaderBackButton';

export default function DebugPage() {
  document.title = "Debug Log - CountLog";

  return (
    <React.Fragment>
      <AppBar
        leading={[
          <HeaderBackButton iconName="arrow left"></HeaderBackButton>
        ]}
        trailing={[]}
        title={"Debug Log"}
      />
      <DebugContent></DebugContent>
    </React.Fragment>
  );
}
