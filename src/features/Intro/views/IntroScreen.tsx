import React from 'react';
import { ViewContent, Typography, Button } from '@shared/components';
import { router } from 'expo-router';
import { MainTabsRoutesEnum } from '@/src/_app/types';

interface IntroScreenProps {}

const IntroScreen: React.FC<IntroScreenProps> = () => {
  return (
    <ViewContent center gap={16}>
      <Typography>IntroScreen</Typography>
      <Button
        onPress={() => router.navigate(MainTabsRoutesEnum.HOME)}
        title="Go to tabs"
        typographyProps={{ caps: true }}
      />
    </ViewContent>
  );
};

export default IntroScreen;
