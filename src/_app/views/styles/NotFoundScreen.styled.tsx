import styled from '@emotion/native';
import { Link as RouterLink } from 'expo-router';
import { ThemedView } from '@shared/components';

export const Container = styled(ThemedView)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
});

export const Link = styled(RouterLink)({
  marginTop: 15,
  paddingVertical: 15,
});
