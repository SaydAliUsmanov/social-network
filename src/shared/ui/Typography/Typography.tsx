import { HTMLAttributes } from 'react';
import { BreakPointsValues, ITypography } from 'shared/styles/styled';
import styled from 'styled-components';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: keyof ITypography | Partial<Record<BreakPointsValues | 'default', keyof ITypography>>;
}

const breakpointOrder = ['default', 'desktop', 'laptop', 'tablet', 'mobile'];

const P = styled.p<{ variant: TypographyProps['variant'] }>`
  ${({ theme, variant }) => {
    if (typeof variant === 'string') {
      return theme.typography[variant];
    }
    return Object.entries(variant)
      .sort(([a], [b]) => breakpointOrder.indexOf(a) - breakpointOrder.indexOf(b))
      .map(([breakpoint, variant]) => {
        if (breakpoint === 'default') {
          return theme.typography[variant];
        }
        return `
      ${theme.breakpoints.max(breakpoint as BreakPointsValues)} {
        ${theme.typography[variant]}
      }  
    `;
      });
  }}
`;

export const Typography = ({ variant = 'displayMedium', ...props }: TypographyProps) => (
  <P variant={variant} {...props} />
);
