/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DefaultTheme } from 'styled-components';
import { IBreakpoints, IShape, ITypography, MediaCreator } from './styled';

const generateMediaCreator = (type: string): MediaCreator => {
  return function (breakpoint) {
    //@ts-expect-error
    const breakpoints = this as unknown as IBreakpoints;

    return `@media (${type}-width: ${breakpoints[breakpoint] || ''}px)`;
  };
};

const breakpoints: DefaultTheme['breakpoints'] = {
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  mobile: 425,
  max: generateMediaCreator('max'),
  min: generateMediaCreator('min'),
};

const shadows: string[] = [
  '0px 1px 4px 0px rgba(0, 0, 0, 0.14)',
  '0px 1px 8px 0px rgba(0, 0, 0, 0.14)',
];

const shape: IShape = {
  borderRadius: '8px',
};

const typography: ITypography = {
  text: '1rem',
  text2: '0.875rem',
  h1: '4rem',
  h2: '2.25rem',
  h3: '1.5rem',
  caption: '0.75rem',
};

const common = {
  breakpoints,
  shadows,
  shape,
  typography,
};

export const light: DefaultTheme = {
  ...common,
  name: 'light',
  colors: {
    primary: '#007fff',
    secondary: '#4b5d7b',
    accent: '#fff',
    background: '#f9fafb',
    text: '#4b5d7b',
    lightText: '#939eaf',
    error: '#fd4d4d',
  },
};

export const dark: DefaultTheme = {
  ...common,
  name: 'dark',
  colors: {
    primary: '#007fff',
    secondary: '#4b5d7b',
    accent: '#fff',
    background: '#333',
    text: '#4b5d7b',
    lightText: '#939eaf',
    error: '#fd4d4d',
  },
};
