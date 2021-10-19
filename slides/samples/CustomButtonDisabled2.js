import React from 'react';
import { makeStyles, Button, lighten } from '@material-ui/core';
import clsx from 'clsx';

const useCustomButtonStyles = makeStyles(
  {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',

      '&$disabled': {
        background: `linear-gradient(45deg, ${lighten(
          '#FE6B8B',
          0.5
        )} 30%, ${lighten('#FF8E53', 0.5)} 90%)`,
        boxShadow: 'none',
        color: 'grey',
        cursor: 'default',
        pointerEvents: 'none',
      },
    },
    disabled: {},
  },
  {
    name: 'CustomButton',
  }
);

const CustomButton = ({ disabled, ...props }) => {
  const classes = useCustomButtonStyles();

  return (
    <Button
      className={clsx(classes.root, {
        [classes.disabled]: disabled,
      })}
      {...props}
    />
  );
};

export default CustomButton;
