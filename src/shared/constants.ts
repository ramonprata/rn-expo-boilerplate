export const ASSETS_PATHS = {
  fonts: {
    SpaceMono: "@assets/fonts/SpaceMono-Regular.ttf",
  },
};

export const Colors = {
  light: {
    tintColorLight: "#0a7ea4",
    text: "#11181C",
    background: "#fff",
    icon: "#687076",
    tabIconDefault: "#687076",
    get tint() {
      return this.tintColorLight;
    },
    get tabIconSelected() {
      return this.tintColorLight;
    },
  },
  dark: {
    tintColorDark: "#fff",
    text: "#ECEDEE",
    background: "#151718",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    get tint() {
      return this.tintColorDark;
    },
    get tabIconSelected() {
      return this.tintColorDark;
    },
  },
};
