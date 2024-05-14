import { Redirect, Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon, Typography, ViewContent } from '@shared/components';
import { theme } from '@shared/theme';
import { useColorScheme } from '@/src/shared/hooks/useColorScheme';
import { MainTabsRoutesEnum } from '../../types';
import { NAVIGATION_LABELS } from '../../utils';

export default function MainTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName={MainTabsRoutesEnum.HOME}
      screenOptions={{
        tabBarActiveTintColor: theme.colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name={MainTabsRoutesEnum.HOME}
        options={{
          title: NAVIGATION_LABELS.tabs[MainTabsRoutesEnum.HOME].title,

          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name={MainTabsRoutesEnum.EXPLORE}
        options={{
          title: NAVIGATION_LABELS.tabs[MainTabsRoutesEnum.EXPLORE].title,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={MainTabsRoutesEnum.DEMO}
        options={{
          title: NAVIGATION_LABELS.tabs[MainTabsRoutesEnum.DEMO].title,
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'search' : 'search'} color={color} />,
        }}
      />
    </Tabs>
  );
}
