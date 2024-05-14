import React from 'react';
import { ViewContent, Typography } from '@shared/components';
import { MainStack } from '@/src';

interface ComponentNameProps {}

const ComponentName: React.FC<ComponentNameProps> = () => {
  return (
    <ViewContent center>
      <MainStack />
    </ViewContent>
  );
};

export default ComponentName;
