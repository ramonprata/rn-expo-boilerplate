import React from 'react';
import { ParallaxScrollView, Typography, ViewContent } from '@shared/components';
import { Ionicons } from '@expo/vector-icons';

import { useLoadData } from '../hooks/useLoadData';
import { Button, Content, IoniconHeader } from './styles/DemoScreen.styled';
import { DEMO_FEAT_TEXTS } from '../utils/constants';

interface DemoScreenProps {}

const DemoScreen: React.FC<DemoScreenProps> = () => {
  const { data, refetch, loading } = useLoadData();

  const renderContent = () => {
    if (loading) {
      return (
        <ViewContent>
          <Typography>{DEMO_FEAT_TEXTS.txtLoadingJoke}</Typography>
        </ViewContent>
      );
    }
    return (
      <>
        <ViewContent flexRow centerY>
          <Typography variant="subtitle" color="textSecondary">
            {`${DEMO_FEAT_TEXTS.labelCategory}: `}
          </Typography>
          <Typography>{data?.category}</Typography>
        </ViewContent>
        <ViewContent flexRow centerY>
          <Typography variant="subtitle" color="textSecondary">
            type: {`${DEMO_FEAT_TEXTS.labelCategory}: `}
          </Typography>
          <Typography>{data?.type}</Typography>
        </ViewContent>
        <Typography variant="subtitle" color="textSecondary">
          {DEMO_FEAT_TEXTS.txtGoesLike}
        </Typography>
        <Typography>{data?.setup}</Typography>
        <Typography>{data?.delivery}</Typography>
      </>
    );
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<IoniconHeader size={310} name="code-slash" />}>
      <Content>
        <ViewContent flexRow gap={8}>
          <Typography variant="title" color="secondary">
            {DEMO_FEAT_TEXTS.txtHearJoke}
          </Typography>
        </ViewContent>
        {renderContent()}
      </Content>
      <Button onPress={() => refetch()} flexRow gap={8} center>
        <Typography applyColorSchema>{DEMO_FEAT_TEXTS.btnGetJoke}</Typography>
        <Ionicons size={24} name="reload" />
      </Button>
    </ParallaxScrollView>
  );
};

export default DemoScreen;
