import { TColorScheme, TTypography } from './TTheme';

export const colors: TColorScheme = {
  light: {
    background: '#fff',
    icon: '#687076',
    primary: '#000',
    secondary: '#000',
    tintColor: '#0a7ea4',
    get tint() {
      return this.tintColor;
    },
    textPrimary: 'orange',
    textSecondary: 'green',
    tabIconDefault: '#687076',
    get tabIconSelected() {
      return this.tintColor;
    },
  },
  dark: {
    background: '#151718',
    icon: '#9BA1A6',
    primary: '#000',
    secondary: '#000',
    tintColor: '#fff',
    get tint() {
      return this.tintColor;
    },
    textPrimary: 'pink',
    textSecondary: 'violet',
    tabIconDefault: '#9BA1A6',
    get tabIconSelected() {
      return this.tintColor;
    },
  },
};

export const typography: TTypography = {
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
};

export const theme = {
  colors,
  typography,
};
