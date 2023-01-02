import { BreakPointsValues } from 'shared/styles/styled';
import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

const maxBreakpointOrder = ['default', 'desktop', 'laptop', 'tablet', 'mobile'];
const minBreakpointOrder = maxBreakpointOrder.reverse();

export type GenerateBreakpointsObject<Values> = Partial<
  Record<BreakPointsValues | 'default', Values>
>;

export const generateBreakpoints = <T extends DefaultTheme, K extends object>(
  theme: T,
  breakpoints: K,
  cb: (value: NonNullable<K[keyof K]>, theme: T) => string | FlattenSimpleInterpolation,
  type: 'min' | 'max' = 'max',
): string[] => {
  const order = type === 'max' ? maxBreakpointOrder : minBreakpointOrder;
  return Object.entries(breakpoints)
    .sort(([a], [b]) => order.indexOf(a) - order.indexOf(b))
    .map(([breakpoint, variant]) => {
      if (breakpoint === 'default') {
        return cb(variant, theme);
      }
      return `
        ${theme.breakpoints.max(breakpoint as BreakPointsValues)} {
          ${cb(variant, theme)}
        }
      `;
    }) as string[];
};
