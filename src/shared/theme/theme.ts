import { TColorScheme, TTypography } from './TTheme';

export const colors: TColorScheme = {
  light: {
    background: '#FFFFFF',
    icon: '#687076',
    primary: '#E7BB10',
    secondary: '#173A58',
    tintColor: '#0a7ea4',
    get tint() {
      return this.tintColor;
    },

    textPrimary: '#000',
    textSecondary: '#ccc',
    tabIconDefault: '#687076',
    get tabIconSelected() {
      return this.tintColor;
    },
  },
  dark: {
    background: '#173A58',
    icon: '#9BA1A6',
    secondary: '#E7BB10',
    primary: '#173A58',
    tintColor: '#fff',
    get tint() {
      return this.tintColor;
    },
    textPrimary: '#fff',
    textSecondary: '#eee',
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
  btnText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
};

export const theme = {
  colors,
  typography,
};
