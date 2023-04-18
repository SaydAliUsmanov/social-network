import { HTMLAttributes } from 'react';
import { generateBreakpoints, GenerateBreakpointsObject } from 'shared/lib/styles';
import { ITypography } from 'shared/styles/styled';
import styled from 'styled-components';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: keyof ITypography | GenerateBreakpointsObject<keyof ITypography>;
}

const P = styled.p<{ variant: NonNullable<TypographyProps['variant']> }>`
  ${({ theme, variant }) => {
    if (typeof variant === 'string') {
      return theme.typography[variant];
    }
    return generateBreakpoints(theme, variant, (value) => theme.typography[value]);
  }}
`;

export const Typography = ({ variant = 'displayMedium', ...props }: TypographyProps) => (
  <P variant={variant} {...props} />
);
