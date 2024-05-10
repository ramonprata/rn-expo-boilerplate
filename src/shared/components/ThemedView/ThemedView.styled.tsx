import styled from '@emotion/native';
import { View } from 'react-native';

export const Container = styled(View)(({ backgroundColor }: { backgroundColor: string }) => ({
  backgroundColor,
}));
