import React from 'react';
import { ViewContent, Typography, Pressable } from '@shared/components';
import { router } from 'expo-router';
import { MainStackRoutesEnum, MainTabsRoutesEnum } from '@/src/_app/types';

interface IntroScreenProps {}

const IntroScreen: React.FC<IntroScreenProps> = () => {
  return (
    <ViewContent center gap={16}>
      <Typography>IntroScreen</Typography>
      <Pressable flex={0} onPress={() => router.navigate(MainTabsRoutesEnum.HOME)}>
        <Typography>GO TO TABS</Typography>
      </Pressable>
    </ViewContent>
  );
};

export default IntroScreen;
