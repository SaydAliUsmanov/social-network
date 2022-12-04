import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const Root = styled.button<{ variant: ButtonProps['variant']; small: ButtonProps['small'] }>`
  border: 1px solid transparent;
  background-color: transparent;
  color: #333;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return css`
          background-color: #007fff;
          color: #fff;
        `;
      case 'outlined':
        return css`
          background-color: transparent;
          color: #007fff;
          border-color: #007fff;
        `;
    }
  }}

  ${({ small }) =>
    small &&
    css`
      padding: 8px 16px;
    `}
`;

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'outlined' | 'contained' | 'text';
  small?: boolean;
};

export const Button = ({ children, variant = 'text', small = false, ...props }: ButtonProps) => {
  return (
    <Root small={small} variant={variant} {...props}>
      {children}
    </Root>
  );
};
