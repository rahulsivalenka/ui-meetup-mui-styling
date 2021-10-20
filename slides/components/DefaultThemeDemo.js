import { useTheme } from '@material-ui/core';
import React from 'react';

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

function BrowserOnly({ children, fallback }) {
  if (!canUseDOM || children == null) {
    return fallback || null;
  }

  return <>{children()}</>;
}

const DefaultThemeDemo = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontSize: 14,
        textAlign: 'left',
        minWidth: 1000,
        maxHeight: '60vh',
        minHeight: 300,
        overflow: 'auto',
        margin: '0 auto',
      }}
    >
      <BrowserOnly>
        {() => {
          const ReactJson = require('react-json-view').default;
          return (
            <ReactJson name="Default Theme" src={theme} theme="tomorrow" />
          );
        }}
      </BrowserOnly>
    </div>
  );
};

export default DefaultThemeDemo;
