import { Image, Platform } from 'react-native';

import { Collapsible, Typography, ExternalLink, ParallaxScrollView, ViewContent } from '@shared/components';
import { IoniconHeader } from './styles/ExploreScreen.styled';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<IoniconHeader size={310} name="code-slash" />}>
      <ViewContent flexRow gap={8}>
        <Typography variant="title">Explore</Typography>
      </ViewContent>
      <Typography>This app includes example code to help you get started.</Typography>
      <Collapsible title="File-based routing">
        <Typography>
          This app has two screens: <Typography variant="default">app/(tabs)/index.tsx</Typography> and{' '}
          <Typography variant="default">app/(tabs)/explore.tsx</Typography>
        </Typography>
        <Typography>
          The layout file in <Typography variant="default">app/(tabs)/_layout.tsx</Typography> sets up the tab
          navigator.
        </Typography>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Typography>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <Typography variant="default">w</Typography> in the terminal running this project.
        </Typography>
      </Collapsible>
      <Collapsible title="Images">
        <Typography>
          For static images, you can use the <Typography variant="default">@2x</Typography> and{' '}
          <Typography variant="default">@3x</Typography> suffixes to provide files for different screen densities
        </Typography>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Typography>
          Open <Typography variant="default">app/_layout.tsx</Typography> to see how to load{' '}
          <Typography>custom fonts such as this one.</Typography>
        </Typography>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Typography>
          This template has light and dark mode support. The <Typography variant="default">useColorScheme()</Typography>{' '}
          hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </Typography>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Typography variant="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <Typography>
          This template includes an example of an animated component. The{' '}
          <Typography variant="default">components/HelloWave.tsx</Typography> component uses the powerful{' '}
          <Typography variant="default">react-native-reanimated</Typography> library to create a waving hand animation.
        </Typography>
        {Platform.select({
          ios: (
            <Typography>
              The <Typography variant="default">components/ParallaxScrollView.tsx</Typography> component provides a
              parallax effect for the header image.
            </Typography>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}
