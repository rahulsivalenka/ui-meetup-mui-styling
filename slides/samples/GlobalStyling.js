import React from 'react';
import {
  createTheme,
  CssBaseline,
  lighten,
  ThemeProvider,
} from '@material-ui/core';
import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/styles.css';

const defaultTheme = createTheme({});
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '.rw-widget': {
          ...defaultTheme.typography.body2,
        },
        '.rw-date-picker': {
          maxWidth: 300,
        },
        '.rw-state-focus .rw-widget-picker': {
          borderColor: defaultTheme.palette.primary.main,
          boxShadow: `0 0 0 3px ${lighten(
            defaultTheme.palette.primary.main,
            0.25
          )}`,
        },
        '.rw-cell.rw-state-selected': {
          backgroundColor: defaultTheme.palette.primary.main,
          borderColor: defaultTheme.palette.primary.main,
          color: defaultTheme.palette.primary.contrastText,
        },
      },
    },
  },
});

const GlobalStyling = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DatePicker placeholder="m/dd/yy" />
    </ThemeProvider>
  );
};

export default GlobalStyling;
