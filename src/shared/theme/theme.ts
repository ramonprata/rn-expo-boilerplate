import { TColorScheme, TTypography } from "./TTheme";

export const colors: TColorScheme = {
  light: {
    tintColor: "#0a7ea4",
    text: "#11181C",
    background: "#fff",
    icon: "#687076",
    tabIconDefault: "#687076",
    get tint() {
      return this.tintColor;
    },
    get tabIconSelected() {
      return this.tintColor;
    },
  },
  dark: {
    tintColor: "#fff",
    text: "#ECEDEE",
    background: "#151718",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    get tint() {
      return this.tintColor;
    },
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
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
};

export const theme = {
  colors,
  typography,
};
