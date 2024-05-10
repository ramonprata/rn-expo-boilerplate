import styled from '@emotion/native';
import { Image } from 'react-native';

import { ThemedView } from '@/src/shared/components';

export const TitleContainer = styled(ThemedView)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
});

export const StepContainer = styled(ThemedView)({
  gap: 8,
  marginBottom: 8,
});

export const ReactLogo = styled(Image)({
  height: 178,
  width: 290,
  bottom: 0,
  left: 0,
  position: 'absolute',
});
