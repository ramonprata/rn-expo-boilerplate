import React from 'react';
import { ParallaxScrollView, Typography, ViewContent } from '@shared/components';
import { Ionicons } from '@expo/vector-icons';

import { useLoadData } from '../hooks/useLoadData';
import { Button, Content } from './styles/DemoScreen.styled';

interface DemoScreenProps {}

const DemoScreen: React.FC<DemoScreenProps> = () => {
  const { data, refetch, loading } = useLoadData();

  const renderContent = () => {
    if (loading) {
      return (
        <ViewContent>
          <Typography>Loading a new joke</Typography>
        </ViewContent>
      );
    }
    return (
      <>
        <ViewContent flexRow centerY>
          <Typography variant="subtitle" color="textSecondary">
            category:{' '}
          </Typography>
          <Typography>{data?.category}</Typography>
        </ViewContent>
        <ViewContent flexRow centerY>
          <Typography variant="subtitle" color="textSecondary">
            type:{' '}
          </Typography>
          <Typography>{data?.type}</Typography>
        </ViewContent>
        <Typography variant="subtitle" color="textSecondary">
          It goes like..
        </Typography>
        <Typography>{data?.delivery}</Typography>
      </>
    );
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" />}>
      <Content>
        <ViewContent flexRow gap={8}>
          <Typography variant="title" color="secondary">
            Wanna hear a Joke?
          </Typography>
        </ViewContent>
        {renderContent()}
      </Content>
      <Button onPress={() => refetch()} flexRow gap={8} center>
        <Typography applyColorSchema>Get a new joke</Typography>
        <Ionicons size={24} name="reload" />
      </Button>
    </ParallaxScrollView>
  );
};

export default DemoScreen;
