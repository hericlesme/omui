import {
  default as InputStyle,
  InputSizes,
  InputTheme,
  InputVariants
} from '../input/input.style';

const Textarea: InputTheme = {
  ...InputStyle,
  baseStyle: {
    ...InputStyle.baseStyle,
    paddingY: '8px',
    minHeight: '80px',
    lineHeight: 'short'
  }
};

export const TextareaVariants = InputVariants;
export const TextareaSizes = InputSizes;

export default Textarea;