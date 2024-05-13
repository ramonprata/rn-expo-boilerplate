import { CSSProperties } from 'react';

export type TTextStyle = {
  fontSize: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
  lightColor?: string;
  darkColor?: string;
};
export type TTypography = {
  default: TTextStyle;
  defaultSemiBold: TTextStyle;
  title: TTextStyle;
  subtitle: TTextStyle;
  link: TTextStyle;
};

export type TColors = {
  background: string;
  icon: string;
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  tabIconDefault: string;
  tabIconSelected: string;
  tint: string;
  tintColor: string;
};

export type TColorScheme = {
  light: TColors;
  dark: TColors;
};

export type TTheme = {
  colors: TColorScheme;
  typography: TTypography;
};
