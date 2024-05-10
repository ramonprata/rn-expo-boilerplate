import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';

export const Heading = styled(TouchableOpacity)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6,
});

export const Content = styled(TouchableOpacity)({
  marginTop: 6,
  marginLeft: 24,
});
