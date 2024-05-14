import styled from '@emotion/native';
import ViewContent from '../ViewContent/ViewContent';

export const Container = styled(ViewContent)(({ backgroundColor }: { backgroundColor: string }) => ({
  backgroundColor,
}));
