import React from 'react';
import { Box, Typography, makeStyles, CssBaseline } from '@material-ui/core';

const useUsingThemeStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.warning.main,
    },
  }),
  { name: 'UsingTheme' }
);

const UsingTheme = () => {
  const classes = useUsingThemeStyles();
  return (
    <Box p={[3, 7]} className={classes.root}>
      <p>
        <strong>Secondary Color Text</strong>
      </p>
    </Box>
  );
};

export default UsingTheme;
