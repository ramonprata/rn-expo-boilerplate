import { useColorScheme as useSchema } from 'react-native';

export const useColorScheme = () => {
  const colorSchema = useSchema();
  return colorSchema;
};
