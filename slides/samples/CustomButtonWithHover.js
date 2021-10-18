import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useCustomButtonStyles = makeStyles(
  {
    root: {
      background: 'linear-gradient(45deg, Salmon 30%, IndianRed 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxSizing: 'border-box',

      '&:hover': {
        background: 'linear-gradient(45deg, IndianRed 30%, Salmon 90%)',
        color: 'black',
        fontWeight: 'bold',
      },

      '&:before, &:after, & *::before, & *::after': {
        boxSizing: 'border-box',
      },

      '&.MuiButton-text': {
        textTransform: 'none',
      },

      '& > span': {
        color: 'black',
      },
    },
  },
  {
    name: 'CustomButton',
  }
);

const CustomButton = (props) => {
  const classes = useCustomButtonStyles();

  return <Button className={classes.root} {...props} />;
};

export default CustomButton;
