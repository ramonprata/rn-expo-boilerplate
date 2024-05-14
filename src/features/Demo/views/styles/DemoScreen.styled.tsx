import styled from '@emotion/native';
import { Pressable, ViewContent } from '@shared/components';
import { Ionicons } from '@expo/vector-icons';

export const Content = styled(ViewContent)({
  minHeight: 200,
});

export const Button = styled(Pressable)({
  borderWidth: 1,
  borderRadius: 8,
  paddingVertical: 12,
});

export const IoniconHeader = styled(Ionicons)({
  color: '#808080',
  bottom: -90,
  left: -35,
  position: 'absolute',
});
