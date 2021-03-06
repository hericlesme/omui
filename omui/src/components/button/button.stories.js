import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { PhoneIcon, CalendarIcon } from '@chakra-ui/icons';

import { Button, IconButton, ButtonStyle } from './';

import {
  themeIconButtonSizes,
  themeButtonSizes,
  themeButtonColors,
  themeButtonVariants
} from '../../helpers/get-theme';

export default { title: 'Primitives/Button', decorators: [withKnobs] };

const { size, variant, colorScheme } = ButtonStyle.defaultProps;

export const Default = () => {
  const isLoading = boolean('Is loading?', false);
  const loadingText = isLoading ? text('Loading text', 'Submitting...') : null;
  const leftIcon = boolean('Left icon?', false);
  const rightIcon = boolean('Right icon?', false);

  return (
    <Button
      size={select('Size', themeButtonSizes, size)}
      variant={select('Variant', themeButtonVariants, variant)}
      colorScheme={select('Color', themeButtonColors, colorScheme)}
      leftIcon={leftIcon ? <PhoneIcon /> : null}
      rightIcon={rightIcon ? <CalendarIcon /> : null}
      isDisabled={boolean('Is disabled?', false)}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {text('Text', 'Customize me with knobs!')}
    </Button>
  );
};

export const Icon = () => (
  <IconButton
    size={select('Size', themeIconButtonSizes, size)}
    variant={select('Variant', themeButtonVariants, variant)}
    colorScheme={select('Color', themeButtonColors, colorScheme)}
    icon={<PhoneIcon />}
    isRound={boolean('Is round?', IconButton.defaultProps.isRound)}
    isDisabled={boolean('Is disabled?', false)}
    isLoading={boolean('Is loading?', false)}
  />
);
