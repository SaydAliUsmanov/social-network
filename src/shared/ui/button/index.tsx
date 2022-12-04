import { HTMLAttributes, ReactNode, useRef } from 'react';
import { ColorKeys } from 'shared/styles/styled';
import * as Styles from './styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained' | 'text';
  /**
   * Делает высоту чуть меньше
   */
  small?: boolean;
  color?: ColorKeys;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Button = ({
  children,
  variant = 'text',
  small = false,
  color = 'primary',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <Styles.Root ref={ref} color={color} small={small} variant={variant} {...props}>
      {startIcon && <Styles.StartIcon>{startIcon}</Styles.StartIcon>}
      {children}
      {endIcon && <Styles.EndIcon>{endIcon}</Styles.EndIcon>}
    </Styles.Root>
  );
};
