import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

import CustomButtonDisabled1 from '../samples/CustomButtonDisabled1';
import CustomButtonDisabled2 from '../samples/CustomButtonDisabled2';

const DisabledDemo = ({ betterImplementation }) => {
  const [disabled, setDisabled] = useState(false);

  const Button = betterImplementation
    ? CustomButtonDisabled2
    : CustomButtonDisabled1;

  return (
    <div>
      <Checkbox checked={disabled} onChange={() => setDisabled(!disabled)} />

      <Button disabled={disabled}>{disabled ? 'Disabled' : 'Enabled'}</Button>
    </div>
  );
};

export default DisabledDemo;
