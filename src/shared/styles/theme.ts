/* eslint-disable @typescript-eslint/ban-ts-comment */
import { css, DefaultTheme } from 'styled-components';
import { IBreakpoints, IShape, ITypography, MediaCreator, ZIndex } from './styled';

const generateMediaCreator = (type: string): MediaCreator =>
  function mediaCreator(breakpoint) {
    // @ts-expect-error
    const breakpoints = this as unknown as IBreakpoints;

    return `@media (${type}-width: ${breakpoints[breakpoint] || ''}px)`;
  };

export const breakpoints: DefaultTheme['breakpoints'] = {
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  mobile: 425,
  max: generateMediaCreator('max'),
  min: generateMediaCreator('min'),
};

export const shadows: string[] = [
  '0px 1px 4px 0px rgba(0, 0, 0, 0.14)',
  '0px 1px 8px 0px rgba(0, 0, 0, 0.14)',
];

export const shape: IShape = {
  borderRadius: '8px',
};

export const typography: ITypography = {
  heading1: css`
    font-size: 30px;
    line-height: 46px;
    font-weight: 900;
  `,
  heading2: css`
    font-size: 26px;
    line-height: 40px;
    font-weight: 700;
  `,
  heading3: css`
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
  `,
  displayBold: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  `,
  displayMedium: css`
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
  `,
  bodyMedium: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  `,
  bodyBold: css`
    font-size: 14px;
    line-height: 22px;
    font-weight: 700;
  `,
  bodyRegular: css`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  `,

  bodyMedium2: css`
    font-size: 13px;
    line-height: 18px;
    font-weight: 500;
  `,
  bodyMedium3: css`
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
  `,
  bodyRegular2: css`
    font-style: 12px;
    line-height: 18px;
    font-weight: 400;
  `,
  bodyRegularM4: css`
    font-size: 10px;
    line-height: 16px;
    font-weight: 500;
  `,
  bodyRegular4: css`
    font-size: 10px;
    line-height: 16px;
    font-weight: 400;
  `,
};

export const zIndex: ZIndex = {
  modal: 1500,
};

export const common = {
  breakpoints,
  shadows,
  shape,
  typography,
  zIndex,
};

export const light: DefaultTheme = {
  ...common,
  name: 'light',
  colors: {
    primary: '#007fff',
    secondary: '#4b5d7b',
    accent: '#fff',
    background: '#fff',
    text: '#4b5d7b',
    lightText: '#939eaf',
    error: '#fd4d4d',
    paper: '#fff',
    shadow: 'rgba(36, 36, 36, 0.2)',
    backdrop: 'rgba(51, 62, 82, 0.5)',
  },
};

export const dark: DefaultTheme = {
  ...common,
  name: 'dark',
  colors: {
    primary: '#007fff',
    secondary: '#4b5d7b',
    accent: '#191c21',
    background: '#333',
    text: '#edeff2',
    lightText: '#939eaf',
    error: '#fd4d4d',
    paper: '#191c21',
    shadow: 'rgba(210, 210, 210, 0.2)',
    backdrop: 'rgba(33, 40, 51, 0.8)',
  },
};
