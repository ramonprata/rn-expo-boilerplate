import styled from '@emotion/native';
import { Pressable, ViewContent } from '@shared/components';

export const Content = styled(ViewContent)({
  minHeight: 200,
});

export const Button = styled(Pressable)({
  borderWidth: 1,
  borderRadius: 8,
  paddingVertical: 12,
});
