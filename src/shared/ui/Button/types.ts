import { HTMLAttributes, ReactNode } from 'react';
import { ColorKeys } from 'shared/styles/styled';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained' | 'text';
  /**
   * Делает высоту чуть меньше
   */
  small?: boolean;
  color?: ColorKeys;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  as?: React.ElementType;
}
