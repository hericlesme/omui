import React from 'react';
// TODO: Change this import and remove it from package.json when it becomes part of core
import {
  PinInput as ChakraPinInput,
  PinInputField
} from '@chakra-ui/pin-input';

import { default as PinInputStyle } from './pin-input.style';

import { Stack } from '../stack';

type PinInputProps = {
  length: number;
  spacing: number;
};

export const PinInput = ({ length, spacing, ...props }: PinInputProps) => {
  const fields = [...Array(length).keys()];

  return (
    <ChakraPinInput {...props}>
      <Stack direction="row" spacing={spacing}>
        {fields.map((_, index) => (
          <PinInputField key={index} />
        ))}
      </Stack>
    </ChakraPinInput>
  );
};

PinInput.defaultProps = {
  ...PinInputStyle.defaultProps,
  spacing: 2
};