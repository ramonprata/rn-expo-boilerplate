export const appJSON = {
  expo: {
    name: 'Boilerplate', // SETUP - APP CONFIG - name that will show on the device home screen
    slug: 'boilerplate', // SETUP - APP CONFIG - "url" friendly name of the app
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'boilerplate', // SETUP - APP CONFIG - name used for deeplinking the application from outside of the app
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: ['expo-router'],
    experiments: {
      typedRoutes: true,
    },
  },
};
