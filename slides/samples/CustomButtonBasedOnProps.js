import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useCustomButtonStyles = makeStyles(
  {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: ({ color }) => color ?? 'white',
      height: 48,
      padding: '0 30px',
    },
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
