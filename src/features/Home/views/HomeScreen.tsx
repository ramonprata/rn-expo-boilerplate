import { Image, Platform } from 'react-native';
import ParallaxScrollView from '@/src/shared/components/ParallaxScrollView/ParallaxScrollView';
import { ThemedText, HelloWave } from '@shared/components';
import * as Styled from './styles/HomeScreen.styled';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Styled.ReactLogo source={require('@/assets/images/partial-react-logo.png')} />}>
      <Styled.TitleContainer>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </Styled.TitleContainer>
      <Styled.StepContainer>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes. Press{' '}
          <ThemedText type="defaultSemiBold">{Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}</ThemedText> to
          open developer tools.
        </ThemedText>
      </Styled.StepContainer>
      <Styled.StepContainer>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>Tap the Explore tab to learn more about what's included in this starter app.</ThemedText>
      </Styled.StepContainer>
      <Styled.StepContainer>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </Styled.StepContainer>
    </ParallaxScrollView>
  );
}
