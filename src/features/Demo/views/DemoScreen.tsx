import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useLoadData } from '../hooks/useLoadData';
import { ParallaxScrollView, ThemedText, ThemedView } from '@/src/shared/components';
import { Ionicons } from '@expo/vector-icons';

interface DemoScreenProps {}

const DemoScreen: React.FC<DemoScreenProps> = () => {
  const { data, error, isPending } = useLoadData();

  const renderContent = () => {
    if (isPending) {
      return (
        <ThemedView>
          <ActivityIndicator />
        </ThemedView>
      );
    }
    return (
      <>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Explore</ThemedText>
        </ThemedView>
        <ThemedText>{data?.category}</ThemedText>
        <ThemedText>{data?.delivery}</ThemedText>
      </>
    );
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" />}>
      {renderContent()}
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default DemoScreen;
