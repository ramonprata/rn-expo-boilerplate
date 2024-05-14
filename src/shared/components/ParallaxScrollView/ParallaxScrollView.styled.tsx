import styled from '@emotion/native';
import { Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import ViewContent from '../ViewContent/ViewContent';

export const Container = styled(ViewContent)({
  flex: 1,
  backgroundColor: '#fff',
});

export const AnimatedHeader = styled(Animated.View)({
  height: 250,
  overflow: 'hidden',
  flex: 1,
});

export const Content = styled(ViewContent)({
  flex: 1,
  padding: 32,
  gap: 16,
  overflow: 'hidden',
  backgroundColor: '#fff',
});

export const styles = StyleSheet.create({
  header: {
    height: 250,
    overflow: 'hidden',
  },
});
