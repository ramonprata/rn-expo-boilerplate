import { Platform } from 'react-native';
import { Typography, HelloWave, ParallaxScrollView } from '@shared/components';
import * as Styled from './styles/HomeScreen.styled';

export default function HomePrivateContent() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Styled.ReactLogo source={require('@/assets/images/partial-react-logo.png')} />}>
      <Styled.TitleContainer>
        <Typography variant="title">Welcome!</Typography>
        <HelloWave />
      </Styled.TitleContainer>
      <Styled.StepContainer>
        <Typography variant="subtitle">Step 1: Try it</Typography>
        <Typography>
          Edit <Typography variant="default">app/(tabs)/index.tsx</Typography> to see changes. Press{' '}
          <Typography variant="default">{Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}</Typography> to open
          developer tools.
        </Typography>
      </Styled.StepContainer>
      <Styled.StepContainer>
        <Typography variant="subtitle">Step 2: Explore</Typography>
        <Typography>Tap the Explore tab to learn more about what's included in this starter app.</Typography>
      </Styled.StepContainer>
      <Styled.StepContainer>
        <Typography variant="subtitle">Step 3: Get a fresh start</Typography>
        <Typography>
          When you're ready, run <Typography variant="default">npm run reset-project</Typography> to get a fresh{' '}
          <Typography variant="default">app</Typography> directory. This will move the current{' '}
          <Typography variant="default">app</Typography> to <Typography variant="default">app-example</Typography>.
        </Typography>
      </Styled.StepContainer>
    </ParallaxScrollView>
  );
}
