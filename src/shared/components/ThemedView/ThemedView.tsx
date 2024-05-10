import { type ViewProps } from 'react-native';

import { useThemeColor } from '../../hooks';
import * as Styled from './ThemedView.styled';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

function ThemedView({ lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <Styled.Container backgroundColor={backgroundColor} {...otherProps} />;
}

export default ThemedView;
