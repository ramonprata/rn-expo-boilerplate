import React from 'react';
import { router } from 'expo-router';
import { ViewContent, Typography, Button } from '@shared/components';
import { MainStackRoutesEnum } from '@/src/_app/types';

interface TermsScreenProps {}

const TermsScreen: React.FC<TermsScreenProps> = () => {
  return (
    <ViewContent center gap={16}>
      <Typography>TermsScreen</Typography>
      <Button
        onPress={() => router.navigate(MainStackRoutesEnum.PUBLIC_INTRO)}
        title="See terms"
        typographyProps={{ caps: true }}
      />
    </ViewContent>
  );
};

export default TermsScreen;
