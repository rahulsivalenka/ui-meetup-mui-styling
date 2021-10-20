import React from 'react';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';

const defaultTheme = createTheme({});

const theme = createTheme(
  // These overrides are merged with default theme options to create the final theme
  {
    palette: {
      primary: {
        main: '#df8020',
        contrastText: 'hsl(0deg 0% 0%)',
      },
    },
  }
);

const CustomTheme = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button color="primary" variant="contained">
        Default Theme Button
      </Button>

      <br />

      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">
          Custom Theme Button
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default CustomTheme;
