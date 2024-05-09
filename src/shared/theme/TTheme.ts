export type TTypography = {
  [key: string]: {
    fontSize: number;
    color?: string;
    fontWeight?: string;
    lineHeight?: number;
  };
};

export type TColors = {
  tintColor: string;
  tint: string;
  text: string;
  background: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

export type TColorScheme = {
  light: TColors;
  dark: TColors;
};

export type TTheme = {
  colors: TColorScheme;
  typography: TTypography;
};
