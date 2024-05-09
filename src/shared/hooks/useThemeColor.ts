/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { theme } from '@shared';
import { useColorScheme } from 'react-native';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof theme.colors.light & keyof typeof theme.colors.dark,
) {
  const colorSchema = useColorScheme() ?? 'light';
  const colorFromProps = props[colorSchema];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme.colors[colorSchema][colorName];
  }
}
