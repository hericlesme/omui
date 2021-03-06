import React, { useState } from 'react';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';
import { CheckIcon } from '@chakra-ui/icons';

import { Slider } from './';
import { Text } from '../../';
import { themeSliderSizes, themeSliderColors } from '../../helpers/get-theme';

export default { title: 'Components/Slider', decorators: [withKnobs] };

const { size, colorScheme, showMinMax } = Slider.defaultProps;

export const Default = () => {
  const [value, setValue] = useState(30);

  const icon = boolean('Show icon?', false);

  return (
    <>
      <Slider
        value={value}
        size={select('Size', themeSliderSizes, size)}
        colorScheme={select('Color', themeSliderColors, colorScheme)}
        min={number('Minimum', 0, { min: -100, max: 100, step: 5 })}
        max={number('Maximum', 100, { min: 100, max: 200, step: 5 })}
        step={number('Step', 10, { min: 1, max: 10, step: 1 })}
        showMinMax={boolean('Show min/max', showMinMax)}
        icon={icon ? <CheckIcon /> : null}
        onChange={(val) => setValue(val)}
      />
      <Text mt={4}>Value is: {value}</Text>
    </>
  );
};
