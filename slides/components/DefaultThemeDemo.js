import { useTheme } from '@material-ui/core';
import React from 'react';
import ReactJson from 'react-json-view';

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
      <ReactJson name="Default Theme" src={theme} theme="tomorrow" />
    </div>
  );
};

export default DefaultThemeDemo;
