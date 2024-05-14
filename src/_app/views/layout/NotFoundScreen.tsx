import { Stack } from 'expo-router';
import { Typography } from '@shared/components';
import * as Styled from '../styles/NotFoundScreen.styled';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Styled.Container>
        <Typography variant="title">This screen doesn't exist.</Typography>
        <Styled.Link href="/">
          <Typography variant="link">Go to home screen!</Typography>
        </Styled.Link>
      </Styled.Container>
    </>
  );
}
