import { Stack } from 'expo-router';
import { ThemedText } from '@shared/components';
import * as Styled from '../styles/NotFoundScreen.styled';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Styled.Container>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Styled.Link href="/">
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Styled.Link>
      </Styled.Container>
    </>
  );
}
