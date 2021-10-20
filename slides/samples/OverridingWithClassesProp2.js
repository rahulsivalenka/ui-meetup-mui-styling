import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useCustomTextFieldStyles = makeStyles(
  (theme) => ({
    root: {},
    label: {
      color: 'white',
    },
    input: {},
  }),
  { name: 'CustomTextField' }
);

const CustomTextField = (props) => {
  const classes = useCustomTextFieldStyles({ classes: props.classes });

  const { classes: _, label, ...rest } = props;
  return (
    <div className={classes.root}>
      <Typography component="label" variant="body2" className={classes.label}>
        {label}
        {` `}
        <input type="text" {...rest} className={classes.input} />
      </Typography>
    </div>
  );
};

const useOverridingWithClassesPropStyles = makeStyles(
  () => ({
    customLabel: {
      color: 'red',
    },
  }),
  { name: 'OverridingWithClassesProp' }
);

const OverridingWithClassesProp = () => {
  const classes = useOverridingWithClassesPropStyles();
  return (
    <div>
      <CustomTextField label="Normal Label Color" />
      <CustomTextField
        classes={{ label: classes.customLabel, input: 'my-input' }}
        label="Custom Label Color"
      />
    </div>
  );
};

export default OverridingWithClassesProp;
