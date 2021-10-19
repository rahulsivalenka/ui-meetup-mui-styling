import React, { useState } from 'react';
import { makeStyles, Button, lighten } from '@material-ui/core';

const useCustomButtonStyles = makeStyles(
  {
    root: {
      background: ({ disabled }) =>
        disabled
          ? `linear-gradient(45deg, ${lighten('#FE6B8B', 0.5)} 30%, ${lighten(
              '#FF8E53',
              0.5
            )} 90%)`
          : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: ({ disabled }) =>
        !disabled && '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: ({ disabled }) => (disabled ? 'grey' : 'white'),
      height: 48,
      padding: '0 30px',
    },
  },
  {
    name: 'CustomButton',
  }
);

const CustomButton = ({ disabled, ...props }) => {
  const classes = useCustomButtonStyles({ disabled });

  return <Button className={classes.root} {...props} disabled={disabled} />;
};

export default CustomButton;
