import 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import {} from 'styled-components/cssprop';

export type MediaCreator = (breakpoint: BreakPointsValues) => string;

export interface IBreakpoints {
  desktop: number;
  laptop: number;
  tablet: number;
  mobile: number;
}

export type BreakPointsValues = keyof IBreakpoints;

export interface ITypography {
  heading1: FlattenSimpleInterpolation;
  heading2: FlattenSimpleInterpolation;
  heading3: FlattenSimpleInterpolation;
  displayBold: FlattenSimpleInterpolation;
  displayMedium: FlattenSimpleInterpolation;
  bodyBold: FlattenSimpleInterpolation;
  bodyMedium: FlattenSimpleInterpolation;
  bodyRegular: FlattenSimpleInterpolation;
  bodyMedium2: FlattenSimpleInterpolation;
  bodyMedium3: FlattenSimpleInterpolation;
  bodyRegular2: FlattenSimpleInterpolation;
  bodyRegularM4: FlattenSimpleInterpolation;
  bodyRegular4: FlattenSimpleInterpolation;
}

export interface IShape {
  borderRadius: string;
}

export interface IColor {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  lightText: string;
  error: string;
  paper: string;
  shadow: string;
  backdrop: string;
}

export type ColorKeys = keyof IColor;

export type ZIndex = Record<'modal', number>;

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: IColor;
    breakpoints: IBreakpoints & {
      max: MediaCreator;
      min: MediaCreator;
    };
    typography: ITypography;
    shadows: string[];
    shape: IShape;
    zIndex: ZIndex;
  }
}
