import { useFonts } from 'expo-font';

export const useLoadFonts = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../../../assets/fonts/SpaceMono-Regular.ttf'),
  });
  return {
    loaded,
  };
};
