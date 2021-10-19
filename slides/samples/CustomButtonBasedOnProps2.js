import React from 'react';
import { alpha, Button, darken, makeStyles } from '@material-ui/core';

const useCustomButtonStyles = makeStyles(
  {
    root: ({ color }) => ({
      background: `linear-gradient(45deg, #FE6B8B 30%, ${color} 90%)`,
      border: 0,
      borderRadius: 3,
      boxShadow: `0 3px 5px 2px ${alpha(color, 0.3)}`,
      color: darken(color, 0.6) ?? 'white',
      height: 48,
      padding: '0 30px',
    }),
  },
  {
    name: 'CustomButton',
  }
);

const CustomButton = ({ color, ...props }) => {
  const classes = useCustomButtonStyles({ color });

  return <Button className={classes.root} {...props} />;
};

export default CustomButton;
