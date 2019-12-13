import React from 'react';
import DebugContent from './DebugContent/DebugContent';
import DebugHeader from './DebugHeader/DebugHeader';

export default function DebugPage() {
  document.title = "Debug Log - CountLog";

  return (
    <React.Fragment>
      <DebugHeader></DebugHeader>
      <DebugContent></DebugContent>
    </React.Fragment>
  );
}
