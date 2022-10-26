import React from 'react';
import ElectionProvider from './containers/ElectionProvider';
import TwoColumns from './presentation/TwoColumns';

export default function ElectionResult() {
  return (
    <div>
      <h1>Election Night Results 2022 (Province of Quebec)</h1>
      <ElectionProvider>
        <TwoColumns />
      </ElectionProvider>
    </div>
  );
}
