import { tv } from 'tailwind-variants';

const font = tv({
  base: 'font-sans',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default font;