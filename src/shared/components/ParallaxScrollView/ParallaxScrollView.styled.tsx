import styled from '@emotion/native';
import { Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import ThemedView from '../ThemedView/ThemedView';

export const Container = styled(ThemedView)({
  flex: 1,
});

export const AnimatedHeader = styled(Animated.View)({
  height: 250,
  overflow: 'hidden',
  flex: 1,
});

export const Content = styled(ThemedView)({
  flex: 1,
  padding: 32,
  gap: 16,
  overflow: 'hidden',
});

export const styles = StyleSheet.create({
  header: {
    height: 250,
    overflow: 'hidden',
  },
});
