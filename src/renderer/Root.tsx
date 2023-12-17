import * as React from 'react';

export const Root = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button onClick={window.electron.throwError}>Throw error</button>
      <button onClick={window.electron.crash}>Crash</button>
    </div>
  );
}