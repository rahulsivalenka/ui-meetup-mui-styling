import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useOverridingWithClassesPropStyles = makeStyles(
  () => ({
    customTextField: {
      '& .MuiInputLabel-root': {
        color: 'red',
      },
    },
  }),
  { name: 'OverridingWithClassesProp' }
);

const OverridingWithClassesProp = () => {
  const classes = useOverridingWithClassesPropStyles();
  return (
    <div>
      <TextField
        label="Custom Label Color"
        classes={{ root: classes.customTextField }}
      />
    </div>
  );
};

export default OverridingWithClassesProp;
